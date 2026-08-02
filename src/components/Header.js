"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const NAV_KEYS = [
  { key: "home", href: "/" },
  { key: "rooms", href: "/rooms" },
  { key: "dining", href: "/dining" },
  { key: "spa", href: "/spa" },
  { key: "gallery", href: "/gallery" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  const { t, lang, toggle, dir } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`header ${scrolled || open ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Ferdows Grand Hotel">
          <Logo />
          <span className="brand__text">
            <span className="brand__name">{t("brand.name")}</span>
            <span className="brand__sub">{t("brand.tagline")}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__links">
            {NAV_KEYS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="lang" role="group" aria-label="Language">
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => lang !== "en" && toggle()}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              className={lang === "fa" ? "active" : ""}
              onClick={() => lang !== "fa" && toggle()}
              aria-pressed={lang === "fa"}
            >
              FA
            </button>
          </div>

          <Link href="/contact" className="btn btn--gold nav__cta">
            {t("nav.book")}
          </Link>

          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            dir={dir}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* mobile overlay */}
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {NAV_KEYS.map((item) => (
          <Link key={item.key} href={item.href} onClick={() => setOpen(false)}>
            {t(`nav.${item.key}`)}
            <small>→</small>
          </Link>
        ))}
        <div className="lang" style={{ marginTop: 34 }}>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => lang !== "en" && toggle()}
          >
            EN
          </button>
          <button
            className={lang === "fa" ? "active" : ""}
            onClick={() => lang !== "fa" && toggle()}
          >
            FA
          </button>
        </div>
      </div>
    </header>
  );
}
