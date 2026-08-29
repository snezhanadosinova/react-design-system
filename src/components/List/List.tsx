import type {
  HTMLAttributes,
  LiHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./List.module.css";

type ListVariant = "default" | "menu";

type ListProps = HTMLAttributes<HTMLUListElement> & {
  children: ReactNode;
  ordered?: boolean;
  variant?: ListVariant;
};

type ListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
};

function ListItem({
  children,
  className = "",
  selected = false,
  disabled = false,
  icon,
  ...props
}: ListItemProps) {
  return (
    <li
      className={[
        styles.item,
        selected ? styles.selected : "",
        disabled ? styles.disabled : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}

      <span className={styles.content}>
        {children}
      </span>
    </li>
  );
}

export function List({
  children,
  className = "",
  ordered = false,
  variant = "default",
  ...props
}: ListProps) {
  const Component = ordered ? "ol" : "ul";

  return (
    <Component
      className={[
        styles.list,
        styles[variant],
        ordered ? styles.ordered : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}

List.Item = ListItem;
