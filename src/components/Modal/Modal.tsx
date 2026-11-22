import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  description?: string;
  footer?: ReactNode;
};

export function Modal({ open, onClose, children, title, description, footer }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;
    previousActiveElement.current = document.activeElement as HTMLElement;
    const modal = modalRef.current;
    if (!modal) return;

    const getFocusableElements = () =>
      Array.from(modal.querySelectorAll<HTMLElement>([
        "button:not([disabled])",
        "a[href]",
        "input:not([disabled]):not([type='hidden'])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[contenteditable='true']",
        "[tabindex]:not([tabindex='-1'])",
      ].join(","))).filter((element) =>
        element.getClientRects().length > 0 &&
        !element.matches(":disabled") &&
        getComputedStyle(element).visibility !== "hidden" &&
        !element.closest("[inert], [aria-hidden='true']")
      );

    const focusFirstElement = () => {
      const first = getFocusableElements()[0];
      (first ?? modal).focus();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;

      const elements = getFocusableElements();
      if (elements.length === 0) {
        event.preventDefault();
        modal.focus();
        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      if (!modal.contains(event.target as Node)) focusFirstElement();
    };

    const overlay = modal.parentElement;
    const inertSiblings = Array.from(document.body.children)
      .filter((element) => element !== overlay)
      .map((element) => ({ element: element as HTMLElement, wasInert: (element as HTMLElement).inert }));
    inertSiblings.forEach(({ element }) => { element.inert = true; });

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn, true);
    focusFirstElement();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn, true);
      document.body.style.overflow = previousOverflow;
      inertSiblings.forEach(({ element, wasInert }) => { element.inert = wasInert; });
      previousActiveElement.current?.focus();
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCloseRef.current();
      }}
    >
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
      >
        <div className={styles.header}>
          <div>
            <h2 id={titleId} className={styles.title}>{title}</h2>
            {description && <p id={descriptionId} className={styles.description}>{description}</p>}
          </div>
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
