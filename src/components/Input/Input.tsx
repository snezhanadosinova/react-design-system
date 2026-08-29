import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { useFormField } from "../FormField/FormFieldContext";
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
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    "aria-required": ariaRequired,
    ...props
  },
  ref,
) {
  const field = useFormField();

  const inputId = id ?? field?.id;

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
          aria-required={required}
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
