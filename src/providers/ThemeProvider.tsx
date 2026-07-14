import { useEffect, useMemo, useState, type ReactNode } from "react";

import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";
import { ThemeContext, type ThemeMode } from "./themeContext";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultTheme);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
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