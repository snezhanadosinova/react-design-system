import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Text.module.css";

export type TextVariant =
  | "body"
  | "body-sm"
  | "body-lg"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "caption";

export type TextWeight = "regular" | "medium" | "semibold" | "bold";

export type TextColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "inverse" | "light" | "dark";

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  children: ReactNode;
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
};

export function Text({
  as: Component = "span",
  variant = "body",
  weight = "regular",
  color = "primary",
  className,
  children,
  ...props
}: TextProps) {
  const classes = [
    styles.text,
    styles[variant],
    styles[weight],
    styles[color],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}