"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const QUICK_LINKS = [
  { key: "rooms", href: "/rooms" },
  { key: "dining", href: "/dining" },
  { key: "spa", href: "/spa" },
  { key: "gallery", href: "/gallery" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link href="/" className="brand" style={{ marginBottom: 22 }}>
              <Logo />
              <span className="brand__text">
                <span className="brand__name">{t("brand.name")}</span>
                <span className="brand__sub">{t("brand.tagline")}</span>
              </span>
            </Link>
            <p>{t("footer.about")}</p>
          </div>

          <div>
            <h4>{t("footer.quick")}</h4>
            {QUICK_LINKS.map((l) => (
              <Link key={l.key} href={l.href} style={{ display: "block" }}>
                {t(`nav.${l.key}`)}
              </Link>
            ))}
          </div>

          <div>
            <h4>{t("footer.contactTitle")}</h4>
            <p>{t("brand.address")}</p>
            <p>{t("brand.phone")}</p>
            <p>{t("brand.email")}</p>
          </div>

          <div>
            <h4>{t("footer.followTitle")}</h4>
            <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
            <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a>
            <a href="#" onClick={(e) => e.preventDefault()}>X / Twitter</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer__bottom">
          <span>{t("footer.legal").replace("{year}", String(year))}</span>
          <span>{t("footer.crafted")}</span>
        </div>
      </div>
    </footer>
  );
}
