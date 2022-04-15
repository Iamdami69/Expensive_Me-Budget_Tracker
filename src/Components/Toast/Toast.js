import styles from "./Toast.module.css";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import { X, LinkBreak, ChatCircleDots, Warning } from "phosphor-react";
import { useEffect, useRef, useState } from "react";

export function Toast({ event, message, messageType }) {
  const { theme } = ThemeContextSupplier();
  const [o, setO] = useState(false);

  const toastRef = useRef();
  useEffect(() => {
    message && setO(true);
  }, [message, o]);
  return (
    <>
      {
        <div
          ref={toastRef}
          className={`${message && o && styles.toastHasOpen}
          ${styles.toastContainer}`}
          style={{ borderLeft: `solid 3px ${theme.brandColor}` }}
        >
          <div className={styles.toastContentWarpper}>
            <div className={styles.iconContainer}>
              {messageType === "error" && (
                <LinkBreak size={50} color="#fb4e04" weight="duotone" />
              )}
              {messageType === "message" && (
                <ChatCircleDots
                  size={50}
                  color={theme.brandColor}
                  weight="duotone"
                />
              )}
              {messageType === "warning" && (
                <Warning size={50} color="#fbe704" weight="duotone" />
              )}
            </div>
            <div className={styles.toastMessageContainer}>
              <div
                onClick={event}
                className={styles.toastCloseContainer}
                style={{ background: theme.depthColor }}
              >
                <X
                  className={styles.closeToastButton}
                  size={20}
                  color={theme.brandColor}
                  weight="duotone"
                />
              </div>
              <p style={{ color: theme.color }}>
                {message &&
                  message
                    .replaceAll("Firebase: Error", "")
                    .replace("(", "")
                    .replace(")", "")
                    .replace("auth", "")
                    .replace("/", "")
                    .replaceAll("-", " ")}
              </p>
            </div>
          </div>
        </div>
      }
    </>
  );
}
