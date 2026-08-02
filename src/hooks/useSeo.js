"use client";

import { useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";

const BRAND = { en: "Ferdows Grand Hotel", fa: "هتل بزرگ فردوس" };

/**
 * Sets the document title per-page on the client. Pages are statically
 * exported as client components, so we update the title once hydrated and
 * whenever the language changes.
 */
export default function useSeo(title) {
  const { lang } = useLang();
  useEffect(() => {
    if (title) document.title = `${title} · ${BRAND[lang]}`;
  }, [title, lang]);
}
