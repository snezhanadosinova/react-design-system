import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={[
          styles.inputContainer,
          error ? styles.error : "",
        ].join(" ")}
      >
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

        <input className={`${styles.input} ${className ?? ""}`} {...props} />

        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}