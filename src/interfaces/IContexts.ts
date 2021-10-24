import { ReactNode } from "react";

export interface ContextType {
  state: IState;
  dispatch: (action: IAction) => void;
}

export interface IState {
  theme: string;
}

export interface IAction {
  type: ThemeActions;
  payload: any;
}

export enum ThemeActions {
  setTheme,
}

export interface IProviderProps {
  children: ReactNode;
}
