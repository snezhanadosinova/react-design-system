import { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className={styles.wrapper}>
      <input
        type="checkbox"
        className={[styles.checkbox, className ?? ""].join(" ")}
        {...props}
      />

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}