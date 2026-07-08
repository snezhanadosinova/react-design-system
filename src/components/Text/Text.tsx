import { HTMLAttributes, ReactNode } from "react";
import styles from "./Text.module.css";

type TextVariant =
  | "body"
  | "body-sm"
  | "body-lg"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "caption";

type TextWeight = "regular" | "medium" | "semibold" | "bold";

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  variant?: TextVariant;
  weight?: TextWeight;
};

export function Text({
  as: Component = "span",
  variant = "body",
  weight = "regular",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={`${styles.text} ${styles[variant]} ${styles[weight]} ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </Component>
  );
}