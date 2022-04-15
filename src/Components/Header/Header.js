import styles from "./Header.module.css";
import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import { List, Bank, MagnifyingGlass, Moon, Sun } from "phosphor-react";
import { useNavigate } from "react-router-dom";
export function Header({
  hasHarmBurger = true,
  event,
  hasInput = false,
  hasBrand = true,
  hasBrandLogo = false,
  hasSearchBar = true
}) {
  const {
    isLightMode,
    toggleTheme,
    theme,
    openMenuFunc
  } = ThemeContextSupplier();
  const navigate = useNavigate();

  return (
    <header
      style={{ backgroundColor: theme.background, zIndex: "3" }}
      className={styles.header}
    >
      {hasHarmBurger && (
        <button
          style={{ backgroundColor: theme.depthColor }}
          className={`wontShowOnDesktop ${styles.button}`}
          onClick={openMenuFunc}
        >
          <List size={30} color={theme.brandColor} weight="fill" />
        </button>
      )}
      {hasBrandLogo && (
        <Bank size={60} color={theme.brandColor} weight="duotone" />
      )}
      {hasBrand && (
        <div>
          <h1 className={styles.brand}>Expensive Me</h1>
        </div>
      )}
      {hasInput && (
        <div className={styles.InputContainer}>
          <input
            style={{ color: theme.colorThree }}
            onInput={event}
            className={styles.searchInput}
            type="text"
            placeholder="Search for transactions"
          />
        </div>
      )}

      <div className={styles.headerLastDiv}>
        {hasSearchBar && (
          <button
            onClick={() => navigate("/search")}
            style={{ backgroundColor: theme.depthColor }}
            className={` ${styles.button}`}
          >
            <MagnifyingGlass size={30} color={theme.brandColor} weight="fill" />
          </button>
        )}
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.depthColor }}
          className={` ${styles.button}`}
        >
          {isLightMode && (
            <Moon size={30} color={theme.brandColor} weight="fill" />
          )}
          {!isLightMode && (
            <Sun size={30} color={theme.brandColor} weight="fill" />
          )}
        </button>
      </div>
    </header>
  );
}
