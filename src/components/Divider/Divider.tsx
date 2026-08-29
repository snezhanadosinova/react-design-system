import styles from "./Divider.module.css";

export type DividerColor =
  | "default"
  | "muted"
  | "strong"
  | "primary"
  | "danger";

export type DividerProps = {
  color?: DividerColor;
};

export function Divider({
  color = "default",
}: DividerProps) {
  return (
    <hr
      className={`${styles.divider} ${styles[color]}`}
      aria-hidden="true"
    />
  );
}
