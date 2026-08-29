import {
    forwardRef,
    type InputHTMLAttributes,
} from "react";
import { useRadioGroup } from "./RadioGroup";
import styles from "./Radio.module.css";

export type RadioProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "checked" | "defaultChecked"
> & {
    label?: string;
};

export const Radio = forwardRef<
    HTMLInputElement,
    RadioProps
>(function Radio(
    {
        label,
        id,
        value,
        name,
        disabled,
        required,
        onChange,
        className,
        ...props
    },
    ref,
) {
    const group = useRadioGroup();

    const isDisabled =
        disabled || group?.disabled;

    const isChecked = group
        ? group.value === value
        : undefined;

    const radioName =
        name ?? group?.name;

    const radioRequired =
        required ?? group?.required;

    const describedBy =
        props["aria-describedby"] ??
        group?.messageId;

    const invalid =
        props["aria-invalid"] ??
        (group?.error ? true : undefined);

    return (
        <label
            htmlFor={id}
            className={[
                styles.label,
                isDisabled ? styles.disabled : "",
                className ?? "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <input
                {...props}
                ref={ref}
                id={id}
                name={radioName}
                type="radio"
                value={value}
                checked={group ? isChecked : undefined}
                disabled={isDisabled}
                required={radioRequired}
                aria-invalid={invalid}
                aria-describedby={describedBy}
                onChange={(event) => {
                    onChange?.(event);

                    group?.onChange(
                        event.target.value,
                    );
                }}
                className={styles.input}
            />

            <span
                className={styles.circle}
                aria-hidden="true"
            >
                <span className={styles.dot} />
            </span>

            {label && (
                <span className={styles.text}>
                    {label}
                </span>
            )}
        </label>
    );
});
