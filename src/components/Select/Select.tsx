import {
  forwardRef,
  type SelectHTMLAttributes,
} from "react";
import { useFormField } from "../FormField/FormFieldContext";
import styles from "./Select.module.css";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children"
> & {
  options: SelectOption[];
  placeholder?: string;
};

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(function Select(
  {
    options,
    placeholder,
    id,
    className,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    "aria-required": ariaRequired,
    ...props
  },
  ref,
) {
  const field = useFormField();

  const selectId = id ?? field?.id;

  const describedBy =
    ariaDescribedBy ??
    field?.messageId;

  const invalid =
    ariaInvalid ??
    (field?.error ? true : undefined);

  const required =
    ariaRequired ??
    (field?.required ? true : undefined);

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <select
          ref={ref}
          id={selectId}
          className={[
            styles.select,
            className ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          aria-required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <span
          className={styles.arrow}
          aria-hidden="true"
        >
          ▾
        </span>
      </div>
    </div>
  );
});
