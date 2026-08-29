import { ReactNode } from "react";
import styles from "./Alert.module.css";

export type AlertType =
  | "info"
  | "success"
  | "warning"
  | "error";

export type AlertProps = {
  type?: AlertType;
  title?: string;
  message: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
};

function AlertIcon({ type }: { type: AlertType }) {
  if (type === "success") {
    return (
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m5 12 4 4L19 6"
        />
      </svg>
    );
  }

  if (type === "warning") {
    return (
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        />
      </svg>
    );
  }

  if (type === "error") {
    return (
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          strokeLinecap="round"
          d="M12 8v4"
        />
        <path
          strokeLinecap="round"
          d="M12 16h.01"
        />
      </svg>
    );
  }

  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        d="M12 11v5"
      />
      <path
        strokeLinecap="round"
        d="M12 8h.01"
      />
    </svg>
  );
}

export function Alert({
  type = "info",
  title,
  message,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  return (
    <div
      className={`${styles.alert} ${styles[type]}`}
      role="alert"
    >
      <AlertIcon type={type} />

      <div className={styles.content}>
        {title && (
          <div className={styles.title}>
            {title}
          </div>
        )}

        <div className={styles.message}>
          {message}
        </div>
      </div>

      {dismissible && (
        <button
          type="button"
          className={styles.close}
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              d="M6 6l12 12"
            />
            <path
              strokeLinecap="round"
              d="M18 6 6 18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
