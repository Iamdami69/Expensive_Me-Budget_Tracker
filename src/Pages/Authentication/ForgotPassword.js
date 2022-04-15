import { Toast } from "../../Components/Toast/Toast";
import { Bank, EnvelopeSimple, Moon, Sun } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { AuthContextSupplier } from "../../Context/AuthContext/AuthContext";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import styles from "./Authentication.module.css";

export function ForgotPassword() {
  const {
    setMessageType,
    messageType,
    resetPassword,
    message,
    setMessage
  } = AuthContextSupplier();
  const { theme, isLightMode, toggleTheme } = ThemeContextSupplier();
  const [formData, setFormData] = useState({
    email: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (formData.email) {
      await resetPassword(formData.email);
    } else {
      setMessage(`Please input your email to get reset password link`);
      setMessageType("message");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      style={{ backgroundColor: theme.background }}
      className={styles.AuthenticationPage}
    >
      <section className={styles.small}>
        <div
          onClick={toggleTheme}
          className={styles.toggleThemeButtonCOntainer}
        >
          {isLightMode && (
            <Moon
              size="30"
              color={theme.brandColor}
              className={styles.toggleButton}
            />
          )}
          {!isLightMode && (
            <Sun
              size="30"
              color={theme.brandColor}
              className={styles.toggleButton}
            />
          )}
        </div>
        <div className={styles.firsDiv}>
          <Bank size="60" color={theme.brandColor} />
          <h1 style={{ color: theme.colorTwo }}>Expensive Me</h1>
          <p style={{ color: theme.colorThree }}>
            Please Sign in to your account
          </p>
          <Link style={{ color: theme.brandColor }} to="/sign-in">
            I have remembered my password
          </Link>
        </div>
        <form onSubmit={startSignup} className={styles.AuthenticationForm}>
          <label
            style={{ backgroundColor: theme.depthColor }}
            className={styles.authenticationFormChild}
          >
            <div className={styles.AuthenticationFormIconContainer}>
              <EnvelopeSimple
                size={20}
                color={theme.brandColor}
                weight="duotone"
              />
            </div>
            <div className={styles.AuthenticationFormInputContainer}>
              <input
                onInput={({ target }) =>
                  setFormData({ ...formData, email: target.value })
                }
                style={{ color: theme.color }}
                placeholder="Email Address"
                type="text"
                autoComplete="false"
              />
            </div>
          </label>

          <div className={styles.forgotPassword}>
            <Link to="/sign-in" style={{ color: theme.brandColor }}>
              remembered password?
            </Link>
          </div>
          <Button
            className="touchableOpacity"
            isDisabled={isSubmitting}
            content={isSubmitting ? "Sending Link..." : "Reset"}
          />
        </form>
        <Toast
          messageType={messageType}
          message={message}
          event={() => setMessage(null)}
        />
      </section>

      <div
        className={`${styles.big} wontShowOnTablet wontShowOnMobile`}
        style={{ backgroundColor: theme.depthColor }}
      ></div>
    </section>
  );
}
