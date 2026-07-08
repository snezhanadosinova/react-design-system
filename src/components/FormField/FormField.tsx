import { ReactNode } from "react";
import styles from "./FormField.module.css";

type FormFieldProps = {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: ReactNode;
};

export function FormField({
  label,
  error,
  helperText,
  required,
  children,
}: FormFieldProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.control}>{children}</div>

      {error && <div className={styles.error}>{error}</div>}

      {!error && helperText && (
        <div className={styles.helper}>{helperText}</div>
      )}
    </div>
  );
}