import {
  forwardRef,
  useId,
  type TextareaHTMLAttributes,
} from "react";
import { useFormField } from "../FormField/FormFieldContext";
import { mergeDescribedBy } from "../../utils/accessibility";
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
    required: nativeRequired,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    "aria-required": ariaRequired,
    ...props
  },
  ref,
) {
  const field = useFormField();
  const generatedId = useId();

  const textareaId = id ?? field?.id ?? generatedId;

  const describedBy = mergeDescribedBy(ariaDescribedBy, field?.messageId);

  const invalid =
    ariaInvalid ??
    (field?.error ? true : undefined);

  const ariaRequiredValue =
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
        required={nativeRequired ?? field?.required}
        aria-required={ariaRequiredValue}
        {...props}
      />
    </div>
  );
});
