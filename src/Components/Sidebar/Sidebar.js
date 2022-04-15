import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import styles from "./Sidebar.module.css";
import { HouseLine, Moon, SignOut, Sun, X } from "phosphor-react";
import { AuthContextSupplier } from "../../Context/AuthContext/AuthContext";
import ProfileURL from "../../Assets/Images/ProfileURL.jpg";
import { useNavigate } from "react-router-dom";
export function Sidebar() {
  const { user, signout } = AuthContextSupplier();
  const {
    closeMenuFunc,
    theme,
    toggleTheme,
    isLightMode
  } = ThemeContextSupplier();

  const navigate = useNavigate();
  return (
    <section
      style={{ backgroundColor: theme.colorThree, color: theme.depthColor }}
      className={styles.sidebar}
    >
      <header className={styles.sidebarHeader}>
        <button
          style={{ backgroundColor: theme.color }}
          className={`wontShowOnDesktop ${styles.button}`}
          onClick={closeMenuFunc}
        >
          <X size={40} color={theme.brandColor} weight="fill" />
        </button>
        <h1 style={{ color: theme.color }} className={styles.sidebarHeaderText}>
          Expensive Me
        </h1>
      </header>
      <div className={styles.userBox}>
        <div className={styles.ProfileURLContainer}>
          <img
            src={user && user.photoURL ? user.photoURL : ProfileURL}
            alt={user ? user.displayName : "profilePhoto"}
          />
        </div>
        <p className={styles.userGreeting}>Hello,</p>
        <p className={styles.userName}>{user ? user.displayName : "user"}</p>
      </div>
      <nav className={styles.nav} style={{ backgroundColor: theme.depthColor }}>
        <div
          className={`touchableOpacity`}
          style={{ backgroundColor: theme.depthColorTwo }}
          onClick={() => navigate("/")}
        >
          <span>
            <HouseLine size="30" color={theme.color} />
          </span>
          <span style={{ color: theme.color }}>Dashboard</span>
        </div>
        <div
          className={`touchableOpacity`}
          style={{ backgroundColor: theme.depthColorTwo }}
          onClick={signout}
        >
          <span>
            <SignOut size="30" color={theme.color} />
          </span>
          <span style={{ color: theme.color }}>Logout</span>
        </div>
        <div
          className={`touchableOpacity`}
          style={{ backgroundColor: theme.depthColorTwo }}
          onClick={toggleTheme}
        >
          <span>
            {isLightMode && <Moon size="30" color={theme.color} />}
            {!isLightMode && <Sun size="30" color={theme.color} />}
          </span>
          <span style={{ color: theme.color }}>
            {isLightMode ? "DarkMode" : "LightMode"}
          </span>
        </div>
      </nav>
    </section>
  );
}
