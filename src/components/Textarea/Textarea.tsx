import {
  forwardRef,
  type TextareaHTMLAttributes,
} from "react";
import { useFormField } from "../FormField/FormFieldContext";
import styles from "./Textarea.module.css";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(function Textarea(
  {
    className,
    id,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    "aria-required": ariaRequired,
    ...props
  },
  ref,
) {
  const field = useFormField();

  const textareaId = id ?? field?.id;

  const describedBy =
    ariaDescribedBy ??
    field?.messageId;

  const invalid =
    ariaInvalid ??
    (field?.error ? true : undefined);

  const required =
    ariaRequired ??
    (field?.required ? true : undefined);

  return (
    <div className={styles.wrapper}>
      <textarea
        ref={ref}
        id={textareaId}
        className={[
          styles.textarea,
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-describedby={describedBy}
        aria-invalid={invalid}
        aria-required={required}
        {...props}
      />
    </div>
  );
});
