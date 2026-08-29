import {
  HTMLAttributes,
  ReactNode,
} from "react";
import styles from "./Card.module.css";

export type CardPadding =
  | "none"
  | "sm"
  | "md"
  | "lg";

export type CardShadow =
  | "none"
  | "sm"
  | "md"
  | "lg";

export type CardProps =
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
    padding?: CardPadding;
    shadow?: CardShadow;
  };

export function Card({
  children,
  padding = "md",
  shadow = "sm",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        styles.card,
        styles[`padding_${padding}`],
        styles[`shadow_${shadow}`],
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
