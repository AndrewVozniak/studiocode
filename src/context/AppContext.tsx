"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale } from "@/i18n/translations";

interface AppContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("oria-locale") as Locale | null;
    const savedTheme = localStorage.getItem("oria-theme") as "dark" | "light" | null;
    if (savedLocale) setLocaleState(savedLocale);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("oria-locale", l);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("oria-theme", next);
  };

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <AppContext.Provider value={{ locale, setLocale, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
