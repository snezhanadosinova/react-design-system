import { CSSProperties, HTMLAttributes } from "react";
import styles from "./Grid.module.css";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  gap?: "sm" | "md" | "lg";
};

export function Grid({
  children,
  columns = 2,
  sm,
  md,
  lg,
  xl,
  gap = "md",
  className,
  style,
  ...props
}: GridProps) {
  const responsiveColumns = {
    sm,
    md,
    lg,
    xl,
  };

  const cssVariables = Object.entries(responsiveColumns).reduce(
    (acc, [breakpoint, value]) => {
      if (value !== undefined) {
        acc[`--grid-columns-${breakpoint}`] = value;
      }

      return acc;
    },
    {} as Record<`--grid-columns-${string}`, number>,
  );

  return (
    <div
      className={[
        styles.grid,
        styles[`gap_${gap}`],
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--grid-columns": columns,
          ...cssVariables,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}
