import { useContext } from "react";
import { ThemeContext, type ThemeMode, type ThemeContextType } from "../providers/themeContext";

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}
