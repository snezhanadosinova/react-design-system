import type { AnchorHTMLAttributes } from "react";
import styles from "./Link.module.css";

export type LinkVariant = "default" | "subtle" | "primary-button" | "secondary-button";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: LinkVariant;
};

export function Link({ variant = "default", className, ...props }: LinkProps) {
  return (
    <a
      className={[styles.link, styles[variant], className ?? ""].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
