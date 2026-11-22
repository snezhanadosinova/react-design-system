import { useId, type ReactNode } from "react";
import {
  FormFieldContext,
  type FormFieldContextValue,
} from "./FormFieldContext";
import styles from "./FormField.module.css";

type FormFieldProps = {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  htmlFor?: string;
  children?: ReactNode;
};

export function FormField({
  label,
  error,
  helperText,
  required = false,
  htmlFor,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId = htmlFor ?? generatedId;
  const messageId = `${fieldId}-message`;

  const contextValue: FormFieldContextValue = {
    id: fieldId,
    error,
    helperText,
    required,
    messageId: error || helperText ? messageId : undefined,
  };

  return (
    <FormFieldContext.Provider value={contextValue}>
      <div className={styles.wrapper}>
        {label && (
          <label
            htmlFor={fieldId}
            className={styles.label}
          >
            {label}

            {required && (
              <span
                className={styles.required}
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}

        <div className={styles.control}>
          {children}
        </div>

        {(error || helperText) && (
          <div
            id={messageId}
            className={
              error
                ? styles.error
                : styles.helper
            }
            role={error ? "status" : undefined}
            aria-live={error ? "polite" : undefined}
          >
            {error || helperText}
          </div>
        )}
      </div>
    </FormFieldContext.Provider>
  );
}
