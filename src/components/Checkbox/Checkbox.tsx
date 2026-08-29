import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";
import styles from "./Checkbox.module.css";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function Checkbox(
  {
    label,
    error,
    helperText,
    id,
    className,
    disabled,
    required,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    "aria-required": ariaRequired,
    ...props
  },
  ref,
) {
  const messageId = id
    ? `${id}-message`
    : undefined;

  const describedBy =
    ariaDescribedBy ??
    messageId;

  const invalid =
    ariaInvalid ??
    (error ? true : undefined);

  const ariaRequiredValue =
    ariaRequired ??
    (required ? true : undefined);

  return (
    <div
      className={[
        styles.wrapper,
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <label
        className={[
          styles.label,
          disabled ? styles.disabled : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={styles.input}
          disabled={disabled}
          required={required}
          aria-describedby={
            describedBy
          }
          aria-invalid={invalid}
          aria-required={
            ariaRequiredValue
          }
          {...props}
        />

        <span
          className={styles.box}
          aria-hidden="true"
        >
          <svg
            className={styles.check}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8.5L6.5 12L13 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {label && (
          <span className={styles.text}>
            {label}

            {required && (
              <span
                className={styles.required}
                aria-hidden="true"
              >
                *
              </span>
            )}
          </span>
        )}
      </label>

      {(error || helperText) && (
        <div
          id={messageId}
          className={
            error
              ? styles.error
              : styles.helper
          }
          role={error ? "alert" : undefined}
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
});
