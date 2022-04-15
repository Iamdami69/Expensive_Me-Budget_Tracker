import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { BudgetContextProvider } from "./Context/BudgetContext/BudgetContext";
import { ThemeContextProvider } from "./Context/ThemeContext/ThemeContext";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthContextProvider>
      <BudgetContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BudgetContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
