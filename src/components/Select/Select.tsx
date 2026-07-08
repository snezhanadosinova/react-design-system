import { useEffect, useRef, useState } from "react";
import styles from "./Select.module.css";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select...",
  label,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      {label && <div className={styles.label}>{label}</div>}

      <div className={styles.control} onClick={() => setOpen((v) => !v)}>
        {selected ? selected.label : placeholder}

        <span className={styles.arrow}>▾</span>
      </div>

      {open && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={[
                styles.option,
                opt.value === value ? styles.active : "",
              ].join(" ")}
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}