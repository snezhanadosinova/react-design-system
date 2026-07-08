import { HTMLAttributes, ReactNode } from "react";
import styles from "./Grid.module.css";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  columns?: number;
  gap?: "sm" | "md" | "lg";
};

export function Grid({
  children,
  columns = 2,
  gap = "md",
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={[
        styles.grid,
        styles[`gap_${gap}`],
        className ?? "",
      ].join(" ")}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}