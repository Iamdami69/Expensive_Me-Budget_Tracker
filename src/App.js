import AppRoutes from "./AppRoutes/AppRoutes";
import styles from "./App.module.css";
import { AuthContextSupplier } from "./Context/AuthContext/AuthContext";
import { ThemeContextSupplier } from "./Context/ThemeContext/ThemeContext";

export default function App() {
  const { authIsReady } = AuthContextSupplier();
  const { theme } = ThemeContextSupplier();

  return (
    <section
      style={{ backgroundColor: theme.background, color: theme.color }}
      className={styles.App}
    >
      {authIsReady && (
        <>
          <AppRoutes />
        </>
      )}
    </section>
  );
}
