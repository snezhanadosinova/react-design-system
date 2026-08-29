import {
    createContext,
    useContext,
    useId,
    useState,
    type ReactNode,
} from "react";
import styles from "./RadioGroup.module.css";

type RadioGroupContextValue = {
    name: string;
    value?: string;
    disabled: boolean;
    required: boolean;
    error?: string;
    messageId?: string;
    onChange: (value: string) => void;
};

const RadioGroupContext =
    createContext<RadioGroupContextValue | null>(null);

export function useRadioGroup() {
    return useContext(RadioGroupContext);
}

export type RadioGroupProps = {
    name: string;
    label?: string;
    value?: string;
    defaultValue?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    children: ReactNode;
    onChange?: (value: string) => void;
};

export function RadioGroup({
    name,
    label,
    value,
    defaultValue,
    required = false,
    disabled = false,
    error,
    helperText,
    children,
    onChange,
}: RadioGroupProps) {
    const generatedId = useId();

    const [internalValue, setInternalValue] = useState<
        string | undefined
    >(defaultValue);

    const isControlled = value !== undefined;
    const selectedValue = isControlled
        ? value
        : internalValue;

    const messageId = `${generatedId}-message`;

    const handleChange = (nextValue: string) => {
        if (!isControlled) {
            setInternalValue(nextValue);
        }

        onChange?.(nextValue);
    };

    const contextValue: RadioGroupContextValue = {
        name,
        value: selectedValue,
        disabled,
        required,
        error,
        messageId,
        onChange: handleChange,
    };

    return (
        <RadioGroupContext.Provider value={contextValue}>
            <fieldset
                className={styles.group}
                disabled={disabled}
                aria-invalid={error ? true : undefined}
                aria-describedby={
                    error || helperText
                        ? messageId
                        : undefined
                }
            >
                {label && (
                    <legend className={styles.legend}>
                        {label}

                        {required && (
                            <span
                                className={styles.required}
                                aria-hidden="true"
                            >
                                *
                            </span>
                        )}
                    </legend>
                )}

                <div className={styles.options}>
                    {children}
                </div>

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
                        {error ?? helperText}
                    </div>
                )}
            </fieldset>
        </RadioGroupContext.Provider>
    );
}
