import { ReactNode } from "react";
import styles from "./Badge.module.css";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return <span className={[styles.badge, styles[variant]].join(" ")}>{children}</span>;
}