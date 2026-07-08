import { InputHTMLAttributes } from "react";
import styles from "./Switch.module.css";

type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <label className={styles.wrapper}>
      <input
        type="checkbox"
        className={[styles.input, className ?? ""].join(" ")}
        {...props}
      />

      <span className={styles.slider} />

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}