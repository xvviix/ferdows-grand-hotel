"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";

export default function CtaBand() {
  const { t, lang } = useLang();
  return (
    <section className="section cta-band">
      <div className="cta-band__bg media">
        <img
          src={img(lang === "fa" ? "exterior.jpg" : "exterior.jpg")}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="container">
        <p className="eyebrow eyebrow--light eyebrow--center">{t("home.cta.kicker")}</p>
        <h2 className="mt-24">{t("home.cta.title")}</h2>
        <p>{t("home.cta.body")}</p>
        <div className="btn-row">
          <Link href="/contact" className="btn btn--gold btn--lg">
            {t("home.cta.cta")}
          </Link>
          <Link href="/rooms" className="btn btn--outline-light btn--lg">
            {t("nav.rooms")}
          </Link>
        </div>
      </div>
    </section>
  );
}
