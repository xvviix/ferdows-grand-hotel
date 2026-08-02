"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import { STRINGS } from "@/i18n/strings";
import useSeo from "@/hooks/useSeo";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export default function SpaPage() {
  const { t, lang } = useLang();
  const s = STRINGS[lang].spaPage;
  useSeo(t("spaPage.title"));

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg media">
          <img src={img("spa.jpg")} alt="" />
        </div>
        <div className="container page-hero__inner">
          <nav className="crumbs">
            <Link href="/">{t("nav.home")}</Link>
            <span>/</span>
            <span>{t("spaPage.title")}</span>
          </nav>
          <h1 className="rise d2">{t("spaPage.title")}</h1>
          <p className="lead rise d3">{t("spaPage.intro")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="grid grid--2" style={{ alignItems: "center", marginBottom: 56 }}>
              <div className="split__media">
                <div className="frame media" style={{ aspectRatio: "16 / 10" }}>
                  <img src={img("pool.jpg")} alt="" loading="lazy" />
                </div>
              </div>
              <div>
                <p className="eyebrow">{t("spaPage.kicker")}</p>
                <h2 className="h2 mt-16">{t("spaPage.title")}</h2>
                <p className="lead mt-24">{t("spaPage.intro")}</p>
                <p className="small mt-24">{t("spaPage.hours")}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid--3">
            {s.items.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <div className="spa-card">
                  <span className="num">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-40">
            <a className="btn btn--gold btn--lg" href="tel:+982155668800">
              {t("spaPage.cta")}
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
