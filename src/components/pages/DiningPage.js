"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import { STRINGS } from "@/i18n/strings";
import useSeo from "@/hooks/useSeo";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

const IMG = ["dining.jpg", "banquet.jpg", "garden.jpg", "bar.jpg"];

export default function DiningPage() {
  const { t, lang } = useLang();
  const s = STRINGS[lang].diningPage;
  useSeo(t("diningPage.title"));

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg media">
          <img src={img("dining.jpg")} alt="" />
        </div>
        <div className="container page-hero__inner">
          <nav className="crumbs">
            <Link href="/">{t("nav.home")}</Link>
            <span>/</span>
            <span>{t("diningPage.title")}</span>
          </nav>
          <h1 className="rise d2">{t("diningPage.title")}</h1>
          <p className="lead rise d3">{t("diningPage.intro")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {s.venues.map((v, i) => (
              <Reveal key={v.name} delay={(i % 2) * 120}>
                <article className="venue-card">
                  <img src={img(IMG[i % IMG.length])} alt={v.name} loading="lazy" />
                  <div className="venue-card__body">
                    <span className="cuisine">{v.cuisine}</span>
                    <h3>{v.name}</h3>
                    <p>{v.desc}</p>
                    <p className="signature">{v.signature}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        style={{ background: "var(--bg-dark)", color: "var(--white)" }}
      >
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "stretch" }}>
            <Reveal>
              <div className="venue-card" style={{ minHeight: 360 }}>
                <img src={img("detail.jpg")} alt={s.tea.name} loading="lazy" />
                <div className="venue-card__body">
                  <span className="cuisine">{t("diningPage.hours")}</span>
                  <h3>{s.tea.name}</h3>
                  <p>{s.tea.desc}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="venue-card" style={{ minHeight: 360 }}>
                <img src={img("bar.jpg")} alt={s.bar.name} loading="lazy" />
                <div className="venue-card__body">
                  <span className="cuisine">{t("diningPage.hours")}</span>
                  <h3>{s.bar.name}</h3>
                  <p>{s.bar.desc}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="text-center mt-40">
            <a className="btn btn--gold btn--lg" href="tel:+982155668800">
              {t("diningPage.reserve")}
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
