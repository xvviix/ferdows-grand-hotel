"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import { rooms } from "@/data/rooms";
import { STRINGS } from "@/i18n/strings";
import useSeo from "@/hooks/useSeo";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import CtaBand from "@/components/CtaBand";

const arrow = (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true" className="arrow">
    <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function HomePage() {
  const { t } = useLang();
  useSeo(null);
  return (
    <>
      <HomeHero />
      <IntroSection />
      <RoomsSection />
      <DiningFeature />
      <QuoteSection />
      <WellnessFeature />
      <TestimonialsSection />
      <GalleryPreview />
      <CtaBand />
    </>
  );
}

function HomeHero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="hero__bg kenburns media">
        <img src={img("hero.jpg")} alt="" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__kicker rise d1">{t("home.hero.kicker")}</p>
          <h1 className="hero__title rise d2">
            {t("home.hero.title1")}
            <br />
            <em style={{ color: "var(--gold-bright)", fontStyle: "normal" }}>
              {t("home.hero.title2")}
            </em>
          </h1>
          <p className="hero__sub rise d3">{t("home.hero.subtitle")}</p>
          <div className="hero__ctas rise d4">
            <Link href="/contact" className="btn btn--gold btn--lg">
              {t("home.hero.cta")}
            </Link>
            <Link href="/about" className="btn btn--outline-light btn--lg">
              {t("home.hero.cta2")}
            </Link>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>{t("home.hero.scroll")} ↓</span>
      </div>
    </section>
  );
}

function IntroSection() {
  const { t, lang } = useLang();
  const s = STRINGS[lang].home.intro;
  const stats = [
    { v: s.stat1v, l: s.stat1 },
    { v: s.stat2v, l: s.stat2 },
    { v: s.stat3v, l: s.stat3 },
    { v: s.stat4v, l: s.stat4 },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="split">
          <Reveal className="split__media">
            <div className="frame media">
              <img src={img("lobby.jpg")} alt="" loading="lazy" />
            </div>
            <div className="badge">
              <b>1972</b>
              <span>{t("brand.established")}</span>
            </div>
          </Reveal>
          <Reveal delay={120} className="split__body">
            <p className="eyebrow">{s.kicker}</p>
            <h2 className="h2">{s.title}</h2>
            <p className="lead mt-24">{s.body}</p>
            <Link
              href="/about"
              className="btn btn--ghost-light btn--outline-light mt-40"
              style={{ borderColor: "var(--ink)" }}
            >
              {s.cta} {arrow}
            </Link>
          </Reveal>
        </div>
        <Reveal>
          <div className="stats">
            {stats.map((x, i) => (
              <div className="stat" key={i}>
                <b>{x.v}</b>
                <span>{x.l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RoomsSection() {
  const { t } = useLang();
  const featured = rooms.filter((r) => r.featured).slice(0, 3);
  return (
    <section className="section" style={{ background: "var(--bg-cream)" }}>
      <div className="container">
        <Reveal>
          <div className="split" style={{ gridTemplateColumns: "1fr auto", alignItems: "end" }}>
            <div>
              <p className="eyebrow">{t("home.rooms.kicker")}</p>
              <h2 className="h2 mt-16">{t("home.rooms.title")}</h2>
              <p className="lead mt-24" style={{ maxWidth: "54ch" }}>
                {t("home.rooms.body")}
              </p>
            </div>
            <Link
              href="/rooms"
              className="btn btn--ghost-light btn--outline-light"
              style={{ borderColor: "var(--ink)", marginBottom: 6 }}
            >
              {t("home.rooms.cta")} {arrow}
            </Link>
          </div>
        </Reveal>
        <div className="grid grid--3 mt-40">
          {featured.map((room, i) => (
            <Reveal key={room.slug} delay={i * 120}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiningFeature() {
  const { t } = useLang();
  return (
    <section className="feature feature--light">
      <div className="feature__media media">
        <img src={img("dining.jpg")} alt="" loading="lazy" />
      </div>
      <div className="feature__body">
        <Reveal>
          <p className="eyebrow">{t("home.dining.kicker")}</p>
          <h2 className="h2">{t("home.dining.title")}</h2>
          <p className="lead">{t("home.dining.body")}</p>
          <Link href="/dining" className="btn btn--gold feature__cta">
            {t("home.dining.cta")} {arrow}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function QuoteSection() {
  const { t } = useLang();
  return (
    <section className="quote">
      <div className="container">
        <Reveal>
          <blockquote>
            <p>{t("home.quote.text")}</p>
            <cite>{t("home.quote.author")}</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

function WellnessFeature() {
  const { t } = useLang();
  return (
    <section className="feature feature--dark feature--reverse">
      <div className="feature__body">
        <Reveal>
          <p className="eyebrow eyebrow--light">{t("home.wellness.kicker")}</p>
          <h2 className="h2" style={{ color: "var(--white)" }}>
            {t("home.wellness.title")}
          </h2>
          <p className="lead lead--light">{t("home.wellness.body")}</p>
          <Link href="/spa" className="btn btn--outline-light feature__cta">
            {t("home.wellness.cta")} {arrow}
          </Link>
        </Reveal>
      </div>
      <div className="feature__media media">
        <img src={img("spa.jpg")} alt="" loading="lazy" />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t, lang } = useLang();
  const items = STRINGS[lang].home.testimonials.items;
  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow eyebrow--center">{t("home.testimonials.kicker")}</p>
          <h2 className="h2 mt-16">{t("home.testimonials.title")}</h2>
        </Reveal>
        <div className="t-grid">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="t-card">
                <div className="stars">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="who">
                  <b>{item.name}</b>
                  <span>{item.place}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const { t } = useLang();
  const shots = ["view.jpg", "bar.jpg", "pool.jpg", "garden.jpg", "architecture.jpg", "banquet.jpg"];
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="split" style={{ gridTemplateColumns: "1fr auto", alignItems: "end" }}>
            <div>
              <p className="eyebrow">{t("home.gallery.kicker")}</p>
              <h2 className="h2 mt-16">{t("home.gallery.title")}</h2>
            </div>
            <Link
              href="/gallery"
              className="btn btn--ghost-light btn--outline-light"
              style={{ borderColor: "var(--ink)", marginBottom: 6 }}
            >
              {t("home.gallery.cta")} {arrow}
            </Link>
          </div>
        </Reveal>
        <div className="gallery-grid mt-40">
          {shots.map((s, i) => (
            <Reveal key={s} className={`g${i + 1}`} delay={i * 60}>
              <img src={img(s)} alt="" loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
