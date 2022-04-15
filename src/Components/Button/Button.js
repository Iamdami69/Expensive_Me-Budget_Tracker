import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import styles from "./Button.module.css";
export function Button({ type, event, className, content, isDisabled }) {
  const { theme } = ThemeContextSupplier();
  return (
    <button
      type={type}
      onClick={event}
      disabled={isDisabled}
      style={{ backgroundColor: theme.brandColor, color: theme.color }}
      className={`${styles.button} ${className}`}
    >
      {content}
    </button>
  );
}
