"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import { rooms } from "@/data/rooms";
import useSeo from "@/hooks/useSeo";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";

export default function RoomDetailPage({ room }) {
  const { t, lang, fmtIRR } = useLang();
  const copy = room[lang];
  const others = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);
  const bedLabel = { king: "king", twin: "twin", kingPlus: "kingPlus" }[room.bed];
  const bed = t(`roomDetail.bedTypes.${bedLabel}`);
  const amenities = t("roomDetail.amenityKeys");

  useSeo(copy.name);

  return (
    <>
      <section className="room-hero">
        <div className="room-hero__bg kenburns media">
          <img src={img(room.images[0])} alt={copy.name} />
        </div>
        <div className="container room-hero__inner">
          <div>
            <nav className="crumbs">
              <Link href="/">{t("nav.home")}</Link>
              <span>/</span>
              <Link href="/rooms">{t("roomsPage.title")}</Link>
              <span>/</span>
              <span>{copy.name}</span>
            </nav>
            <h1 className="rise d2">{copy.name}</h1>
            <p className="lead rise d3" style={{ maxWidth: "52ch" }}>
              {copy.blurb}
            </p>
          </div>
          <div className="rate-box rise d3">
            <span>{t("common.from")}</span>
            <b>{fmtIRR(room.rate)}</b>
            <small>
              {t("currency.unit")} · {t("common.perNight")}
            </small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <Reveal>
            <p className="eyebrow">{t("roomDetail.about")}</p>
            <h2 className="h2 mt-16">{copy.name}</h2>
            <p className="lead mt-24">{copy.desc}</p>

            <h3 className="h3 mt-40">{t("roomDetail.amenities")}</h3>
            <ul className="detail-amenities mt-24">
              {amenities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>

            <h3 className="h3 mt-40">{t("roomDetail.details")}</h3>
            <div className="specs mt-24">
              <div className="row">
                <span>{t("roomDetail.occupancy")}</span>
                <b>
                  {room.capacity} {t("common.guests")}
                </b>
              </div>
              <div className="row">
                <span>{t("roomDetail.size")}</span>
                <b>
                  {room.size} {t("common.m2")}
                </b>
              </div>
              <div className="row">
                <span>{t("roomDetail.bed")}</span>
                <b>{bed}</b>
              </div>
              <div className="row">
                <span>{t("roomDetail.view")}</span>
                <b>{room.view}</b>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="sticky">
              <div
                style={{
                  background: "var(--bg-dark)",
                  color: "var(--white)",
                  padding: 34,
                  borderRadius: 4,
                }}
              >
                <p className="eyebrow eyebrow--light">{t("common.bookRoom")}</p>
                <h3 className="h3 mt-16" style={{ color: "var(--gold-bright)" }}>
                  {fmtIRR(room.rate)} {t("currency.unit")}
                </h3>
                <p className="small small--light" style={{ margin: "8px 0 24px" }}>
                  {t("common.perNight")} · {t("currency.label")}
                </p>
                <a className="btn btn--gold" href="tel:+982155668800" style={{ width: "100%" }}>
                  {t("roomDetail.reserve")}
                </a>
                <p className="small small--light mt-16" style={{ textAlign: "center" }}>
                  {t("roomDetail.callToReserve")} · {t("brand.phone")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--bg-cream)" }}>
        <div className="container">
          <p className="eyebrow">{t("home.gallery.kicker")}</p>
          <div className="room-gallery mt-24">
            {room.images.map((im, i) => (
              <figure key={i}>
                <img src={img(im)} alt={copy.name} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{t("roomDetail.moreRooms")}</p>
          </Reveal>
          <div className="grid grid--3 mt-24">
            {others.map((r, i) => (
              <Reveal key={r.slug} delay={i * 100}>
                <RoomCard room={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
