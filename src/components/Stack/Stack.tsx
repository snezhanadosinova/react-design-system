import { HTMLAttributes, ReactNode } from "react";
import styles from "./Stack.module.css";

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  direction?: "row" | "column";
  gap?: "sm" | "md" | "lg";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "between";
};

export function Stack({
  children,
  direction = "column",
  gap = "md",
  align = "stretch",
  justify = "start",
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={[
        styles.stack,
        styles[direction],
        styles[`gap_${gap}`],
        styles[`align_${align}`],
        styles[`justify_${justify}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
