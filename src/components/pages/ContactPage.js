"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import { STRINGS } from "@/i18n/strings";
import useSeo from "@/hooks/useSeo";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";

const MAP_SRC =
  "https://maps.google.com/maps?q=Ferdowsi%20Avenue%2C%20Tehran&t=&z=14&ie=UTF8&iwloc=&output=embed";

export default function ContactPage() {
  const { t, lang } = useLang();
  const s = STRINGS[lang].contactPage;
  const b = STRINGS[lang].brand;
  useSeo(t("contactPage.title"));

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg media">
          <img src={img("view.jpg")} alt="" />
        </div>
        <div className="container page-hero__inner">
          <nav className="crumbs">
            <Link href="/">{t("nav.home")}</Link>
            <span>/</span>
            <span>{t("contactPage.title")}</span>
          </nav>
          <h1 className="rise d2">{t("contactPage.title")}</h1>
          <p className="lead rise d3">{t("contactPage.body")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-details">
              <div className="contact-item">
                <span>{t("contactPage.addressTitle")}</span>
                <div>{b.address}</div>
              </div>
              <div className="contact-item">
                <span>{t("contactPage.phoneTitle")}</span>
                <div>
                  <a href="tel:+982155668800">{b.phone}</a>
                </div>
              </div>
              <div className="contact-item">
                <span>{t("contactPage.emailTitle")}</span>
                <div>
                  <a href={`mailto:${b.email}`}>{b.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <span>{t("contactPage.hoursTitle")}</span>
                <div>{s.hoursValue}</div>
              </div>

              <div style={{ marginTop: 30 }}>
                <h3 className="h3" style={{ marginBottom: 16 }}>
                  {t("contactPage.nearTitle")}
                </h3>
                <ul className="near-list">
                  {s.near.map((n, i) => (
                    <li key={i}>
                      <span>{n}</span>
                      <i>◦</i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="eyebrow">{t("contactPage.formTitle")}</p>
            <div className="mt-24">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="map">
              <iframe
                title="Ferdows Grand Hotel — Tehran map"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
