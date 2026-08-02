"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="section" style={{ paddingTop: "180px", textAlign: "center" }}>
      <div className="container">
        <p className="eyebrow eyebrow--center" style={{ color: "var(--gold-deep)" }}>
          404
        </p>
        <h1 className="h2 mt-16" style={{ fontFamily: "var(--font-serif)" }}>
          {t("notfound.title")}
        </h1>
        <p className="lead mt-24" style={{ maxWidth: "44ch", marginInline: "auto" }}>
          {t("notfound.body")}
        </p>
        <Link href="/" className="btn btn--gold mt-40">
          {t("nav.home")}
        </Link>
      </div>
    </section>
  );
}
