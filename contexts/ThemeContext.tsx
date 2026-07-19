import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useColorScheme } from "react-native";

type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  resolvedTheme: ThemeMode;
  toggleTheme: () => void;
}

const THEME_KEY = "namemypet_theme_preference";

const ThemeContext = createContext<ThemeContextValue>({
  resolvedTheme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme() ?? "light";
  const [preference, setPreference] = useState<ThemeMode | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Load saved preference on mount
  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((stored) => {
      if (stored === "light" || stored === "dark") {
        setPreference(stored);
      }
      setLoaded(true);
    });
  }, []);

  // Resolved theme: preference wins, otherwise follow system
  const resolvedTheme: ThemeMode = preference ?? systemScheme;

  const toggleTheme = useCallback(() => {
    const next: ThemeMode = resolvedTheme === "light" ? "dark" : "light";
    setPreference(next);
    AsyncStorage.setItem(THEME_KEY, next);
  }, [resolvedTheme]);

  const value = useMemo(
    () => ({ resolvedTheme, toggleTheme }),
    [resolvedTheme, toggleTheme]
  );

  // Show nothing until preference is loaded to avoid flash
  if (!loaded) return null;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
