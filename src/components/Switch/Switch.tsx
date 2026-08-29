import {
    forwardRef,
    type InputHTMLAttributes,
} from "react";
import styles from "./Switch.module.css";

type SwitchProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type"
> & {
    label?: string;
    error?: string;
    helperText?: string;
};

export const Switch = forwardRef<
    HTMLInputElement,
    SwitchProps
>(function Switch(
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
                <span className={styles.control}>
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
                        className={styles.track}
                        aria-hidden="true"
                    >
                        <span className={styles.thumb} />
                    </span>
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
