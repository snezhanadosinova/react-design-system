import { HTMLAttributes, ReactNode } from "react";
import styles from "./Box.module.css";

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export function Box({ children, className, ...props }: BoxProps) {
  return (
    <div className={`${styles.box} ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
}