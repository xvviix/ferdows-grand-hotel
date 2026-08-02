"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import { STRINGS } from "@/i18n/strings";
import useSeo from "@/hooks/useSeo";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export default function AboutPage() {
  const { t, lang } = useLang();
  const s = STRINGS[lang].aboutPage;
  useSeo(t("aboutPage.title"));

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg media">
          <img src={img("architecture.jpg")} alt="" />
        </div>
        <div className="container page-hero__inner">
          <nav className="crumbs">
            <Link href="/">{t("nav.home")}</Link>
            <span>/</span>
            <span>{t("aboutPage.title")}</span>
          </nav>
          <h1 className="rise d2">{t("aboutPage.title")}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal delay={120} className="split__body">
              <p className="eyebrow">{t("aboutPage.kicker")}</p>
              <h2 className="h2 mt-16">{t("aboutPage.title")}</h2>
              <p className="lead mt-24">{s.p1}</p>
              <p className="lead" style={{ marginTop: 24 }}>
                {s.p2}
              </p>
            </Reveal>
            <Reveal className="split__media">
              <div className="frame media">
                <img src={img("exterior.jpg")} alt="" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--bg-cream)" }}>
        <div className="container">
          <Reveal className="text-center">
            <p className="eyebrow eyebrow--center">{t("aboutPage.valuesTitle")}</p>
          </Reveal>
          <div className="values-grid mt-40">
            {s.values.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="value-item">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="text-center">
            <p className="eyebrow eyebrow--center">{t("aboutPage.statsTitle")}</p>
            <div className="stats" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
              <div className="stat">
                <b>1972</b>
                <span>{t("brand.established")}</span>
              </div>
              <div className="stat">
                <b>186</b>
                <span>{t("home.intro.stat1")}</span>
              </div>
              <div className="stat">
                <b>200</b>
                <span>Staff</span>
              </div>
              <div className="stat">
                <b>4</b>
                <span>Restaurants</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
