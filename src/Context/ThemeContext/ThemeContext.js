import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage/useLocalStorage";

const ThemeContext = createContext();

export const ThemeContextSupplier = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
  const pageRef = useRef();
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const [isLightMode, setIsLightMode] = useState(
    getLocalStorage("themeState") ?? false
  );
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    setLocalStorage("themeState", !isLightMode);
  };
  const openMenuFunc = () => {
    pageRef.current.classList.add("menuOpened");
  };
  const closeMenuFunc = () => {
    pageRef.current.classList.remove("menuOpened");
  };
  const theme = {
    background: isLightMode ? "#f8f9fa" : "#212529",
    color: isLightMode ? "#212529" : "#f8f9fa",
    colorTwo: isLightMode ? "#868e96" : "#adb5bd",
    colorThree: isLightMode ? "#495057" : "#868e96",
    depthColor: isLightMode ? "#f1f3f5" : "#343a40",
    depthColorTwo: isLightMode ? "#e9ecef" : "#495057",
    brandColor: isLightMode ? "#ff922b" : "#ffa94d"
  };
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    meta.content = theme.background;
  }, [theme.background]);
  return (
    <ThemeContext.Provider
      value={{
        closeMenuFunc,
        openMenuFunc,
        toggleTheme,
        theme,
        isLightMode,
        pageRef
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
