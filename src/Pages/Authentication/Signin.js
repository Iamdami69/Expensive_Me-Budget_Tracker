import { Toast } from "../../Components/Toast/Toast";
import {
  GithubLogo,
  GoogleLogo,
  Bank,
  EnvelopeSimple,
  LockSimple,
  Moon,
  Sun
} from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { AuthContextSupplier } from "../../Context/AuthContext/AuthContext";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import styles from "./Authentication.module.css";

export function Signin() {
  const {
    setMessageType,
    messageType,
    signin,
    message,
    setMessage,
    continueWithGoogle,
    continueWithGithub
  } = AuthContextSupplier();
  const { theme, isLightMode, toggleTheme } = ThemeContextSupplier();
  const [formData, setFormData] = useState({
    email: null,
    password: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (formData.email && formData.password) {
      await signin(formData.email, formData.password);
    } else {
      setMessage(`Please fill sign form`);
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
          <Link style={{ color: theme.brandColor }} to="/sign-up">
            I do not have an account yet
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
          <label
            style={{ backgroundColor: theme.depthColor }}
            className={styles.authenticationFormChild}
          >
            <div className={styles.AuthenticationFormIconContainer}>
              <LockSimple size={20} color={theme.brandColor} weight="duotone" />
            </div>
            <div className={styles.AuthenticationFormInputContainer}>
              <input
                onInput={({ target }) =>
                  setFormData({ ...formData, password: target.value })
                }
                style={{ color: theme.color }}
                placeholder="Pasword"
                type="text"
                autoComplete="false"
              />
            </div>
          </label>
          <div className={styles.forgotPassword}>
            <Link to="/reset-password" style={{ color: theme.brandColor }}>
              forgot password?
            </Link>
          </div>
          <Button
            className="touchableOpacity"
            isDisabled={isSubmitting}
            content={isSubmitting ? "Signing in..." : "Sign in"}
          />
          <p style={{ textAlign: "center", fontWeight: "500" }}>Or</p>
          <button
            className={`touchableOpacity`}
            disabled={isSubmitting}
            type="button"
            style={{
              backgroundColor: theme.depthColor,
              border: "none",
              width: "100%",
              height: "30px",
              color: theme.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontWeight: "500"
            }}
            onClick={continueWithGoogle}
          >
            <GoogleLogo size="20" color={theme.brandColor} /> continue with
            Google
          </button>

          <button
            className={`touchableOpacity`}
            disabled={isSubmitting}
            type="button"
            style={{
              backgroundColor: theme.color,
              border: "none",
              width: "100%",
              height: "30px",
              color: theme.depthColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontWeight: "500"
            }}
            onClick={continueWithGithub}
          >
            <GithubLogo size="20" color={theme.brandColor} /> continue with
            Githhub
          </button>
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
