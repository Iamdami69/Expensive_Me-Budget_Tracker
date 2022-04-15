import { createContext, useContext, useMemo } from "react";
import { useFirestore } from "../../Hooks/useFirestore/useFirestore";

const BudgetContext = createContext({ budget: null });

export const BudgetContextSupplier = () => useContext(BudgetContext);

export function BudgetContextProvider({ children }) {
  const { data: budget, message } = useFirestore("transactions");

  return (
    <BudgetContext.Provider value={{ message, budget }}>
      {children}
    </BudgetContext.Provider>
  );
}
