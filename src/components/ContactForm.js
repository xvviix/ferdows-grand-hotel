"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        {t("contactPage.formName")}
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        {t("contactPage.formEmail")}
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        {t("contactPage.formMsg")}
        <textarea name="message" required />
      </label>
      {sent ? (
        <p style={{ color: "var(--gold-deep)", fontSize: "0.95rem" }}>
          ✓ — {t("contactPage.formNote")}
        </p>
      ) : (
        <>
          <button className="btn btn--gold" type="submit">
            {t("contactPage.formSubmit")}
          </button>
          <span className="form__note">{t("contactPage.formNote")}</span>
        </>
      )}
    </form>
  );
}
