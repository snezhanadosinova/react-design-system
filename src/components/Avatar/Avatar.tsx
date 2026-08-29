import styles from "./Avatar.module.css";

export type AvatarSize = "sm" | "md" | "lg";

export type AvatarProps = {
  name: string;
  src?: string;
  size?: AvatarSize;
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);

  if (!parts[0]) {
    return "?";
  }

  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }

  return (
    parts[0][0] +
    parts[parts.length - 1][0]
  ).toUpperCase();
}

export function Avatar({
  name,
  src,
  size = "md",
}: AvatarProps) {
  const initials = getInitials(name);

  if (src) {
    return (
      <img
        className={[
          styles.avatar,
          styles[`size_${size}`],
        ].join(" ")}
        src={src}
        alt={name}
      />
    );
  }

  return (
    <div
      className={[
        styles.avatar,
        styles[`size_${size}`],
      ].join(" ")}
      role="img"
      aria-label={name}
    >
      {initials}
    </div>
  );
}