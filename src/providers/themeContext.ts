import { createContext } from "react";

import { lightTheme } from "../themes/light";

export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
    mode: ThemeMode;
    theme: typeof lightTheme;
    toggleTheme: () => void;
    setTheme: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
