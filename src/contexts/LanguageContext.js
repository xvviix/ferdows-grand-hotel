"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LOCALES, STRINGS } from "@/i18n/strings";

const LanguageContext = createContext(null);

const STORAGE_KEY = "ferdows-lang";

function resolveInitial() {
  if (typeof window !== "undefined") {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "fa" || saved === "en") return saved;
    } catch (_) {
      /* ignore */
    }
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Hydrate from storage on mount (avoids SSR/hydration mismatch).
  useEffect(() => {
    setLang(resolveInitial());
  }, []);

  // Keep <html lang=".." dir=".."> in sync — this flips the whole layout to RTL.
  useEffect(() => {
    const meta = LOCALES[lang];
    document.documentElement.setAttribute("lang", meta.lang);
    document.documentElement.setAttribute("dir", meta.dir);
    document.documentElement.setAttribute("data-lang", lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === "en" ? "fa" : "en")), []);
  const setLanguage = useCallback((l) => setLang(l), []);

  const value = useMemo(() => {
    const strings = STRINGS[lang];
    const t = (key) =>
      key.split(".").reduce((o, k) => (o == null ? o : o[k]), strings) ?? key;
    const fmtIRR = (n) =>
      new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US", {
        maximumFractionDigits: 0,
      }).format(n);
    return {
      lang,
      isRTL: lang === "fa",
      dir: LOCALES[lang].dir,
      t,
      toggle,
      setLanguage,
      fmtIRR,
      LOCALES,
    };
  }, [lang, toggle, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
