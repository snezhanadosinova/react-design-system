import { useEffect, useMemo, useState, type ReactNode } from "react";

import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";
import { ThemeContext, type ThemeMode } from "./themeContext";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

const THEME_STORAGE_KEY = "react-design-system-theme";

function getInitialTheme(defaultTheme: ThemeMode): ThemeMode {
  if (typeof window === "undefined") return defaultTheme;

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : defaultTheme;
  } catch {
    return defaultTheme;
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialTheme(defaultTheme));

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // Keep the selected theme for this session when storage is unavailable.
    }
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (nextMode: ThemeMode) => {
    setMode(nextMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
