"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";

const arrow = (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true" className="arrow">
    <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function RoomCard({ room, delay = 0 }) {
  const { t, lang, fmtIRR } = useLang();
  const copy = room[lang];
  const meta = {
    king: t("roomDetail.bedTypes.king"),
    twin: t("roomDetail.bedTypes.twin"),
    kingPlus: t("roomDetail.bedTypes.kingPlus"),
  }[room.bed];

  return (
    <Link href={`/rooms/${room.slug}`} className="room-card">
      <div className="room-card__media media">
        <img src={img(room.images[0])} alt={copy.name} loading="lazy" />
      </div>
      <div className="room-card__body">
        <div>
          <h3>{copy.name}</h3>
          <div className="room-card__meta">
            <span>{room.size} {t("common.m2")}</span>
            <span>·</span>
            <span>{room.capacity} {t("common.guest")}</span>
          </div>
          <span className="room-card__link">
            {t("common.explore")} {arrow}
          </span>
        </div>
        <div className="rate">
          {t("common.from")} <b>{fmtIRR(room.rate)}</b>
          <br />
          {t("currency.unit")} · {t("common.perNight")}
        </div>
      </div>
    </Link>
  );
}
