"use client";

import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { img } from "@/lib/paths";
import { STRINGS } from "@/i18n/strings";

const ITEMS = [
  { src: "lobby.jpg", cat: "architecture", ratio: "g1" },
  { src: "exterior.jpg", cat: "architecture", ratio: "g2" },
  { src: "architecture.jpg", cat: "architecture", ratio: "g3" },
  { src: "detail.jpg", cat: "architecture", ratio: "g4" },
  { src: "room-a.jpg", cat: "rooms", ratio: "g5" },
  { src: "room-b.jpg", cat: "rooms", ratio: "g3" },
  { src: "room-c.jpg", cat: "rooms", ratio: "g4" },
  { src: "room-e.jpg", cat: "rooms", ratio: "g1" },
  { src: "dining.jpg", cat: "dining", ratio: "g2" },
  { src: "bar.jpg", cat: "dining", ratio: "g4" },
  { src: "banquet.jpg", cat: "dining", ratio: "g5" },
  { src: "spa.jpg", cat: "wellness", ratio: "g1" },
  { src: "pool.jpg", cat: "wellness", ratio: "g3" },
  { src: "bath.jpg", cat: "wellness", ratio: "g4" },
  { src: "gym.jpg", cat: "wellness", ratio: "g5" },
  { src: "garden.jpg", cat: "garden", ratio: "g2" },
  { src: "view.jpg", cat: "garden", ratio: "g3" },
  { src: "hero.jpg", cat: "garden", ratio: "g6" },
];

export default function GalleryView() {
  const { t, lang } = useLang();
  const categories = STRINGS[lang].galleryPage.categories; // All, Architecture, ...
  const keys = ["all", "architecture", "rooms", "dining", "wellness", "garden"];
  const [active, setActive] = useState("all");
  const [openIdx, setOpenIdx] = useState(null);

  const filtered = useMemo(
    () => (active === "all" ? ITEMS : ITEMS.filter((i) => i.cat === active)),
    [active]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = openIdx != null ? filtered[openIdx] : null;

  return (
    <>
      <div className="text-center" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        {keys.map((k, i) => (
          <button
            key={k}
            onClick={() => {
              setActive(k);
              setOpenIdx(null);
            }}
            className="btn"
            style={{
              padding: "10px 22px",
              fontSize: "0.7rem",
              background: active === k ? "var(--gold)" : "transparent",
              color: active === k ? "#fff" : "var(--ink)",
              borderColor: active === k ? "var(--gold)" : "var(--ink)",
            }}
          >
            {categories[i]}
          </button>
        ))}
      </div>

      <div className="gallery-grid" style={{ marginTop: 40 }}>
        {filtered.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className={item.ratio}
            onClick={() => setOpenIdx(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setOpenIdx(i)}
          >
            <img src={img(item.src)} alt="" loading="lazy" />
          </figure>
        ))}
      </div>

      <div className={`lightbox ${current ? "open" : ""}`} onClick={() => setOpenIdx(null)}>
        <button
          className="lightbox__close"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            setOpenIdx(null);
          }}
        >
          ×
        </button>
        {current && (
          <>
            <img src={img(current.src)} alt="" onClick={(e) => e.stopPropagation()} />
            <span className="lightbox__cap">{categories[keys.indexOf(current.cat)]}</span>
          </>
        )}
      </div>
    </>
  );
}
