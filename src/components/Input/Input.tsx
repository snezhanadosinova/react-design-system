import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { useFormField } from "../FormField/FormFieldContext";
import { mergeDescribedBy } from "../../utils/accessibility";
import styles from "./Input.module.css";

type InputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(
  {
    leftIcon,
    rightIcon,
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

  const inputId = id ?? field?.id ?? generatedId;

  const describedBy = mergeDescribedBy(ariaDescribedBy, field?.messageId);

  const invalid =
    ariaInvalid ??
    (field?.error ? true : undefined);

  const ariaRequiredValue =
    ariaRequired ??
    (field?.required ? true : undefined);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        {leftIcon && (
          <span
            className={styles.icon}
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          className={[
            styles.input,
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

        {rightIcon && (
          <span className={styles.icon}>
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
});
