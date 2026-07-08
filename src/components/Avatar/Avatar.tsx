import styles from "./Avatar.module.css";

type AvatarProps = {
  name: string;
};

export function Avatar({ name }: AvatarProps) {
  return <div className={styles.avatar}>{name[0]}</div>;
}