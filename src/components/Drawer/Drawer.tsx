import { ReactNode } from "react";
import styles from "./Drawer.module.css";

type DrawerProps = {
  open: boolean;
  children: ReactNode;
};

export function Drawer({ open, children }: DrawerProps) {
  return (
    <div className={[styles.drawer, open ? styles.open : ""].join(" ")}>
      {children}
    </div>
  );
}