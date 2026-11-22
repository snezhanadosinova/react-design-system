import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
} from "react";
import { useFormField } from "../FormField/FormFieldContext";
import { mergeDescribedBy } from "../../utils/accessibility";
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
  const field = useFormField();
  const generatedId = useId();
  const controlId = id ?? field?.id ?? generatedId;
  const effectiveError = error ?? field?.error;
  const effectiveHelper = helperText ?? field?.helperText;
  const isRequired = required ?? field?.required;
  const messageId = field?.messageId ?? `${controlId}-message`;

  const describedBy = mergeDescribedBy(
    ariaDescribedBy,
    effectiveError || effectiveHelper ? messageId : undefined,
  );

  const invalid =
    ariaInvalid ??
    (effectiveError ? true : undefined);

  const ariaRequiredValue =
    ariaRequired ??
    (isRequired ? true : undefined);

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
          id={controlId}
          type="checkbox"
          className={styles.input}
          disabled={disabled}
          required={isRequired}
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

            {isRequired && (
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

      {!field?.messageId && (effectiveError || effectiveHelper) && (
        <div
          id={messageId}
          className={
            effectiveError
              ? styles.error
              : styles.helper
          }
          role={effectiveError ? "status" : undefined}
          aria-live={effectiveError ? "polite" : undefined}
        >
          {effectiveError || effectiveHelper}
        </div>
      )}
    </div>
  );
});
