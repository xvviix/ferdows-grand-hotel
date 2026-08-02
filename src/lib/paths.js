/**
 * Base-path aware asset helper.
 *
 * On GitHub Pages the site lives under a sub-path (e.g. /ferdows-grand-hotel),
 * so absolute asset paths like `/images/x.jpg` would 404. The same
 * NEXT_PUBLIC_BASE_PATH used by next.config.mjs is prepended here so every
 * reference resolves correctly in both local dev and on GitHub Pages.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix an image path stored under /public/images */
export const img = (name) => `${BASE}/images/${name}`;

/** Prefix an arbitrary public asset (favicon, og image, etc.) */
export const asset = (name) => `${BASE}/${name}`;
