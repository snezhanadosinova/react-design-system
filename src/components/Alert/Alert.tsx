import styles from "./Alert.module.css";

type AlertProps = {
  type?: "info" | "success" | "warning" | "error";
  message: string;
};

export function Alert({ type = "info", message }: AlertProps) {
  return <div className={[styles.alert, styles[type]].join(" ")}>{message}</div>;
}