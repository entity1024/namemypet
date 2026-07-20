import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocales } from "expo-localization";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "./en";
import es from "./es";

type Language = "en" | "es";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LANG_KEY = "namemypet_language";

const TRANSLATIONS: Record<Language, Record<string, string>> = { en, es };

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");
  const [loaded, setLoaded] = useState(false);

  // Load saved preference or detect device language on mount
  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem(LANG_KEY);
      if (stored === "en" || stored === "es") {
        setLanguageState(stored);
      } else {
        // Detect device language
        const locales = getLocales();
        const deviceLang = locales[0]?.languageCode;
        if (deviceLang === "es") {
          setLanguageState("es");
        }
      }
      setLoaded(true);
    })();
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    AsyncStorage.setItem(LANG_KEY, lang);
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const value = TRANSLATIONS[language][key];
      if (value == null) {
        // Fallback: try English
        const fallback = TRANSLATIONS["en"][key];
        if (fallback == null) return key;
        if (!params) return fallback;
        return Object.entries(params).reduce(
          (str, [k, v]) => str.replace(`{${k}}`, String(v)),
          fallback
        );
      }
      if (!params) return value;
      return Object.entries(params).reduce(
        (str, [k, v]) => str.replace(`{${k}}`, String(v)),
        value
      );
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  if (!loaded) return null;

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
