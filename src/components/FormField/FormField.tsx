import type { ReactNode } from "react";
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
  const messageId = htmlFor
    ? `${htmlFor}-message`
    : undefined;

  const contextValue: FormFieldContextValue = {
    id: htmlFor,
    error,
    helperText,
    required,
    messageId,
  };

  return (
    <FormFieldContext.Provider value={contextValue}>
      <div className={styles.wrapper}>
        {label && (
          <label
            htmlFor={htmlFor}
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
            role={error ? "alert" : undefined}
          >
            {error || helperText}
          </div>
        )}
      </div>
    </FormFieldContext.Provider>
  );
}