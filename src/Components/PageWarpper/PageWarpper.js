import { ThemeContextSupplier } from "../../Context/ThemeContext/ThemeContext";
import { Header } from "../Header/Header";
import styles from "./PageWarpper.module.css";

export function PageWarpper({
  event,
  hasBrand = true,
  hasInput = false,
  children,
  customClass,
  hasHarmBurger = true,
  hasBrandLogo = false,
  hasSearchBar = true
}) {
  const { theme, pageRef } = ThemeContextSupplier();

  return (
    <section
      ref={pageRef}
      style={{ backgroundColor: theme.background }}
      className={`${customClass} page`}
    >
      <Header
        hasSearchBar={hasSearchBar}
        hasBrandLogo={hasBrandLogo}
        hasHarmBurger={hasHarmBurger}
        event={event}
        hasBrand={hasBrand}
        hasInput={hasInput}
      />
      {children}
    </section>
  );
}
