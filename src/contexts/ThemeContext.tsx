import { createContext, useContext, useReducer } from "react";
import {
  ContextType,
  IState,
  IAction,
  ThemeActions,
  IProviderProps,
} from "../interfaces/IContexts";

const initialData = {
  theme: "dark",
};

// Context
const ThemeContext = createContext<ContextType | undefined>(undefined);

const themeReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ThemeActions.setTheme:
      return { ...state, theme: action.payload };
    default:
      return { ...state };
  }
};

// Provider
export const Provider = ({ children }: IProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, initialData);
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be either ThemeProvider");
  }
  return context;
};
