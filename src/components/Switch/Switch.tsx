import {
    forwardRef,
    useId,
    type InputHTMLAttributes,
} from "react";
import { useFormField } from "../FormField/FormFieldContext";
import { mergeDescribedBy } from "../../utils/accessibility";
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
                <span className={styles.control}>
                    <input
                        ref={ref}
                        id={controlId}
                        type="checkbox"
                        role="switch"
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
                        className={styles.track}
                        aria-hidden="true"
                    >
                        <span className={styles.thumb} />
                    </span>
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
