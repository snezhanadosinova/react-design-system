import { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
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
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}