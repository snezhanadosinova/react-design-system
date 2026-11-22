import { createPortal } from "react-dom";
import { useEffect, useId, useRef, type ReactNode } from "react";
import styles from "./Drawer.module.css";

export type DrawerProps = {
  open: boolean;
  title?: string;
  ariaLabel?: string;
  children?: ReactNode;
  onClose: () => void;
};

export function Drawer({ open, title, ariaLabel = "Drawer", children, onClose }: DrawerProps) {
  const titleId = useId();
  const drawerRef = useRef<HTMLElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    previousActiveElement.current = document.activeElement as HTMLElement;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = () => Array.from(drawer.querySelectorAll<HTMLElement>([
      "button:not([disabled])", "a[href]", "input:not([disabled]):not([type='hidden'])",
      "select:not([disabled])", "textarea:not([disabled])", "[contenteditable='true']",
      "[tabindex]:not([tabindex='-1'])",
    ].join(","))).filter((element) =>
      element.getClientRects().length > 0 &&
      !element.matches(":disabled") &&
      getComputedStyle(element).visibility !== "hidden" &&
      !element.closest("[inert], [aria-hidden='true']")
    );

    const focusFirst = () => (focusable()[0] ?? drawer).focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
      } else if (event.key === "Tab") {
        const elements = focusable();
        if (!elements.length) {
          event.preventDefault();
          drawer.focus();
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
      }
    };
    const onFocusIn = (event: FocusEvent) => {
      if (!drawer.contains(event.target as Node)) focusFirst();
    };

    const overlay = drawer.previousElementSibling;
    const inertSiblings = Array.from(document.body.children)
      .filter((element) => element !== overlay && element !== drawer)
      .map((element) => ({ element: element as HTMLElement, wasInert: (element as HTMLElement).inert }));
    inertSiblings.forEach(({ element }) => { element.inert = true; });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn, true);
    focusFirst();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn, true);
      document.body.style.overflow = previousOverflow;
      inertSiblings.forEach(({ element, wasInert }) => { element.inert = wasInert; });
      previousActiveElement.current?.focus();
    };
  }, [open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) onCloseRef.current();
        }}
        aria-hidden="true"
      />
      <aside
        ref={drawerRef}
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : ariaLabel}
        aria-hidden={!open}
        tabIndex={-1}
      >
        <div className={styles.header}>
          {title && <h2 id={titleId} className={styles.title}>{title}</h2>}
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close drawer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12" />
              <path strokeLinecap="round" d="M18 6 6 18" />
            </svg>
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </aside>
    </>,
    document.body,
  );
}
