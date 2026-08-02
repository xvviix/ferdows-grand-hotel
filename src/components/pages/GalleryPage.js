"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import useSeo from "@/hooks/useSeo";
import Reveal from "@/components/Reveal";
import GalleryView from "@/components/GalleryView";
import CtaBand from "@/components/CtaBand";

export default function GalleryPage() {
  const { t } = useLang();
  useSeo(t("galleryPage.title"));
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg media">
          <img src={img("lobby.jpg")} alt="" />
        </div>
        <div className="container page-hero__inner">
          <nav className="crumbs">
            <Link href="/">{t("nav.home")}</Link>
            <span>/</span>
            <span>{t("galleryPage.title")}</span>
          </nav>
          <h1 className="rise d2">{t("galleryPage.title")}</h1>
          <p className="lead rise d3">{t("galleryPage.body")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <GalleryView />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
