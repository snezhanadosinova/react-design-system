import { ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "default-inverse"
  | "success-inverse"
  | "warning-inverse"
  | "danger-inverse";

export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

export function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={[
        styles.badge,
        styles[variant],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
