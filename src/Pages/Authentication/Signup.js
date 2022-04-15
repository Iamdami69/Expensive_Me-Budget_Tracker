import { Toast } from "../../Components/Toast/Toast";
import {
  Bank,
  EnvelopeSimple,
  GithubLogo,
  GoogleLogo,
  LockSimple,
  Moon,
  Sun,
  UserCirclePlus
} from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { AuthContextSupplier } from "../../Context/AuthContext/AuthContext";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import styles from "./Authentication.module.css";

export function Signup() {
  const {
    setMessageType,
    continueWithGoogle,
    continueWithGithub,
    messageType,
    signup,
    message,
    setMessage
  } = AuthContextSupplier();
  const { theme, isLightMode, toggleTheme } = ThemeContextSupplier();
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    password: null,
    confirmPassword: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.password === formData.confirmPassword
    ) {
      await signup(formData.email, formData.password, formData.name);
    } else {
      setMessage(`Please fill registration form`);
      setMessageType("message");
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage(`Password does not match`);
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
            Start by creating your account
          </p>
          <Link style={{ color: theme.brandColor }} to="/sign-in">
            I already have an account
          </Link>
        </div>
        <form onSubmit={startSignup} className={styles.AuthenticationForm}>
          <label
            style={{ backgroundColor: theme.depthColor }}
            className={styles.authenticationFormChild}
          >
            <div className={styles.AuthenticationFormIconContainer}>
              <UserCirclePlus
                size={20}
                color={theme.brandColor}
                weight="duotone"
              />
            </div>
            <div className={styles.AuthenticationFormInputContainer}>
              <input
                onInput={({ target }) =>
                  setFormData({ ...formData, name: target.value })
                }
                style={{ color: theme.color }}
                placeholder="Name"
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
                  setFormData({ ...formData, confirmPassword: target.value })
                }
                style={{ color: theme.color }}
                placeholder="Confirm password"
                type="text"
                autoComplete="false"
              />
            </div>
          </label>
          <Button
            type="submit"
            className="touchableOpacity"
            isDisabled={isSubmitting}
            content={isSubmitting ? "Signing up..." : "Create account"}
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
        <div></div>
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
