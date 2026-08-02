"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import { rooms } from "@/data/rooms";
import useSeo from "@/hooks/useSeo";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import CtaBand from "@/components/CtaBand";

export default function RoomsListPage() {
  const { t } = useLang();
  useSeo(t("roomsPage.title"));
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg media">
          <img src={img("room-a.jpg")} alt="" />
        </div>
        <div className="container page-hero__inner">
          <nav className="crumbs">
            <Link href="/">{t("nav.home")}</Link>
            <span>/</span>
            <span>{t("roomsPage.title")}</span>
          </nav>
          <h1 className="rise d2">{t("roomsPage.title")}</h1>
          <p className="lead rise d3">{t("roomsPage.body")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rooms-list">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={(i % 3) * 120}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
