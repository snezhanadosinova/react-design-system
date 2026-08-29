import styles from "./Spinner.module.css";

export type SpinnerProps = {
  color?:
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "inverse";
};

export function Spinner({
  color = "primary",
}: SpinnerProps) {
  return (
    <div
      className={[
        styles.spinner,
        styles[`color_${color}`],
      ]
        .filter(Boolean)
        .join(" ")}
      role="status"
      aria-label="Loading"
    />
  );
}
