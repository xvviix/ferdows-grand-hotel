/**
 * Ferdows Grand Hotel — Next.js configuration
 *
 * The site is built as a fully static export (`output: 'export'`), so it can be
 * hosted anywhere (GitHub Pages, Netlify, S3, etc.) with zero server.
 *
 * GitHub Pages note: the site is deployed under the repository sub-path
 * (e.g. https://USER.github.io/ferdows-grand-hotel). That sub-path is set via the
 * `NEXT_PUBLIC_BASE_PATH` environment variable, which is used here for `basePath`
 * AND by the image/asset helper (`src/lib/paths.js`). Locally the variable is
 * unset, so everything resolves to the root and works on http://localhost:3000.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
