# Site Health Report: Ki'bok Coffee SMA

**Date**: 2026-04-14
**Stack**: Next.js (App Router) / TypeScript / Tailwind CSS v4 / Framer Motion / next-intl (EN/ES/JA) / Netlify

---

## Code Quality

- Critical: 0
- High: 7
- Medium: 9
- Low: 6

| Severity | File | Issue |
|----------|------|-------|
| **High** | `src/app/[locale]/about/AboutPageContent.tsx:28`, `src/app/[locale]/beans/BeansPageContent.tsx:27` | `preload` is not a valid Next.js `<Image>` prop — silently ignored, use `priority` instead |
| **High** | `src/components/layout/Footer.tsx:63` | Newsletter form submits nowhere — calls `preventDefault()` and does nothing |
| **High** | `src/app/[locale]/blog/BlogPageContent.tsx:70` | Blog card images use `alt=""` with no `aria-hidden` — screen readers get no context |
| **High** | `src/components/home/FoodSection.tsx:136` | Food card images use `alt=""` on content images that carry meaning |
| **High** | `src/app/[locale]/beans/BeansPageContent.tsx:24` | Hero beans background uses `alt=""` without `aria-hidden` |
| **High** | `src/lib/constants.ts:170` | `sandwich_arrachera` has empty price string — renders dash but inconsistent in `MENU_PRICES` |
| **High** | `src/components/shared/SectionHeading.tsx:3` | `children` typed as `string` but should be `ReactNode` for flexibility |
| **Medium** | `src/components/shared/SpotifyBlock.tsx:61` | Hardcoded English "Press Play" — not translated for ES/JA |
| **Medium** | `src/components/layout/MobileCTA.tsx:26` | Hardcoded English "We're in Centro" — not translated |
| **Medium** | `src/components/home/LocationBanner.tsx:51`, `src/app/[locale]/visit/VisitPageContent.tsx:52` | Hardcoded English "reviews" label — not translated |
| **Medium** | `src/app/[locale]/blog/*/page.tsx` (4 files) | All four static blog pages are entirely hardcoded English with no i18n |
| **Medium** | `src/app/[locale]/blog/[slug]/page.tsx:29` | Dynamic blog fallback has hardcoded English placeholder text |
| **Medium** | `src/components/layout/MarqueeStrip.tsx:21` | `t.raw("items")` cast to `string[]` is unsafe — no runtime guard |
| **Medium** | `src/components/shared/SocialIcons.tsx:17` | Facebook URL inconsistent — `kibokcoffee` vs JSON-LD's `Kiboksma` |
| **Medium** | `src/app/[locale]/visit/VisitPageContent.tsx:85` | Google Maps embed uses null place ID (`0x0:0x0`) — won't show business name |
| **Medium** | `src/components/home/SmaDivider.tsx:26` | `scale-120` is not a standard Tailwind utility — silently ignored |
| Low | Multiple files | Array index used as React `key` in static lists |
| Low | `src/components/layout/MarqueeStrip.tsx:43` | Inline `<style>` tag injected per render — duplicated when component mounts twice |
| Low | `src/app/[locale]/menu/MenuPageContent.tsx:308` | `setTimeout` without cleanup on unmount |
| Low | `src/app/[locale]/layout.tsx:80` | `dangerouslySetInnerHTML` for JSON-LD — works but Next.js 15+ has a cleaner API |
| Low | `src/components/shared/Button.tsx:1` | Uses `next/link` instead of i18n-aware `Link` — will break if internal href passed |
| Low | `src/app/layout.tsx:42` | `lang` attribute never set on `<html>` — WCAG 3.1.1 violation |

---

## Performance

**Build Size:**
| Asset | Uncompressed | Gzip |
|-------|-------------|------|
| JS chunks | 948 KB | ~277 KB |
| CSS (total) | ~352 KB | ~117 KB |
| Font files (.woff2) | 5.6 MB | n/a |
| **Total static output** | **6.9 MB** | — |

**Largest JS bundles:** `0h4bq73pogmtb.js` (224 KB), `062hzijh369a_.js` (144 KB), `12t-drvbo_i0-.js` (124 KB)

| Impact | Issue |
|--------|-------|
| **High** | All pages are server-rendered on demand (no SSG) — no `generateStaticParams`, every visit hits the server |
| **High** | Noto Sans JP loads 372 `@font-face` declarations (5.6 MB) for ALL locales — EN/ES users pay the cost for JA fonts |
| **High** | Hero image (`latteArtHeart`) is only 735x844px — severe upscaling blur on 1440px+ screens (LCP element) |
| **High** | Storefront image (`images.webp`) is only 224x225px — pixelated in 50vw containers |
| **High** | `font-display: swap` missing from 3 of 4 font families — causes Flash of Invisible Text |
| **High** | Deprecated `middleware` convention — must rename to `proxy` before Next.js 16 removes it |
| **Medium** | All 28 components are `"use client"` — 12 home page sections hydrate eagerly including deeply below-fold ones |
| **Medium** | MarqueeStrip injects duplicate `<style>` tags per render |
| **Medium** | 4+ MB of unused JPEG originals in `public/ASSETS/NEW/` alongside their webp twins |
| **Medium** | `IMAGES.kibokInterior` and `IMAGES.beansCloseup` defined but never referenced by any component |
| **Medium** | `preload` prop on two `<Image>` components does nothing — should be `priority` |
| **Medium** | Google Maps iframe triggers 3 third-party connections with no `<link rel="preconnect">` |
| Low | `VibeMeter` runs `setInterval` every 60s from page load — unnecessary on a marketing site |
| Low | `GrainOverlay` is `"use client"` but contains no hooks or state — could be a server component |
| Low | Space Grotesk loads 4 weights (400/500/600/700) — likely only 2 are used |
| Low | `next.config.ts` is empty — no `images.minimumCacheTTL`, no cache headers |

---

## SEO

**Overall SEO Score: 62/100**

| Check | Status |
|-------|--------|
| Pages with complete meta | 6/12 (main pages have title+desc; blog posts and catch-all do not) |
| `og:image` | **MISSING on every page** |
| `twitter:image` | **MISSING on every page** |
| Twitter Card tags | Home page only — missing from all other pages |
| JSON-LD schemas | `CafeOrCoffeeShop` on locale layout (note: not a valid Schema.org type) |
| Missing schemas | `Restaurant` (correct type), `BreadcrumbList`, `Article`/`BlogPosting`, `FAQPage`, `WebSite` |
| Sitemap | Present (`src/app/sitemap.ts`) — missing 4 blog post URLs |
| robots.txt | Present (`src/app/robots.ts`) |
| Hreflang | Relative paths set but `metadataBase` never configured — may not expand to absolute URLs |
| `x-default` hreflang | **MISSING** |
| Canonical URLs | Set on main pages, **missing on blog posts** |
| Home page H1 | **MISSING** — hero uses `<span>` elements, not `<h1>` |
| `lang` on `<html>` | **MISSING** |
| Domain consistency | **BROKEN** — `kibok.netlify.app` in canonicals/sitemap/JSON-LD vs `kibokcoffee-sma.com` in constants |

---

## Overall Health Score

| Area | Rating |
|------|--------|
| **Code** | Needs Work |
| **Performance** | Needs Work |
| **SEO** | Critical |

---

## Recommended Actions (priority order)

### Critical (do first)

1. **Add `og:image` and `twitter:image` to all pages** — without these, every social share (Facebook, Twitter/X, LinkedIn, iMessage, WhatsApp) shows no preview image. Create a default OG image (1200x630px) and add it to the root metadata.

2. **Fix domain inconsistency** — decide on `kibokcoffee-sma.com` vs `kibok.netlify.app` and update `SITE.url`, all canonical URLs, sitemap, robots.txt, and JSON-LD to use the single production domain consistently. Set `metadataBase` in the root layout.

3. **Add H1 to home page hero** — wrap the hero headline in an `<h1>` tag. This is the single most important on-page SEO signal.

4. **Set `lang` attribute on `<html>`** — move `<html>` into `[locale]/layout.tsx` with `lang={locale}` for WCAG compliance and correct screen reader behavior.

### High (do soon)

5. **Add `generateStaticParams` for locales** — export `[{ locale: "en" }, { locale: "es" }, { locale: "ja" }]` from the locale layout to enable static site generation. Eliminates server round-trips, enables CDN edge caching.

6. **Conditionally load Noto Sans JP** — only load the Japanese font for `locale === "ja"`. Saves 5+ MB of font files for 95%+ of visitors.

7. **Replace undersized hero and storefront images** — the hero image (735px) and storefront image (224px) are critically undersized for their containers. Source images at minimum 1920px wide.

8. **Add `font-display: swap`** to Space Grotesk, Inter, and Noto Sans JP to prevent Flash of Invisible Text.

9. **Fix JSON-LD type** — change `CafeOrCoffeeShop` to `Restaurant`. Add `menu` and `hasMap` properties.

10. **Add blog posts to sitemap** — include the 4 static blog article URLs in `sitemap.ts`.

### Medium (do when possible)

11. **Add `generateMetadata` to blog posts** — replace static `metadata` exports with locale-aware `generateMetadata`, add OG tags, canonical, and hreflang.

12. **Wire up newsletter form** — either connect to Resend/Mailchimp API or remove the form until implemented.

13. **Translate hardcoded English strings** — "Press Play", "We're in Centro", "reviews" label, and blog content.

14. **Add `BreadcrumbList` and `Article` JSON-LD** — structured data for inner pages and blog posts.

15. **Lazy-load below-fold home sections** — wrap FoodSection, BeansSection, SpaceSection, SpotifyBlock, LocationBanner, InstagramGrid with `dynamic()` to defer ~40% of client JS.

16. **Fix Google Maps embed** — use the proper embed URL from Google Maps "Share > Embed" instead of constructing from coordinates with a null place ID.

17. **Add `x-default` hreflang** — point to `/en` as the default locale for users with no matching locale.

18. **Delete unused JPEG originals** — remove 4+ MB of `.jpg` files from `public/ASSETS/NEW/` that have `.webp` equivalents.

19. **Rename `middleware.ts` to `proxy.ts`** — the `middleware` convention is deprecated in Next.js 16.

20. **Add `preconnect` hints** for Google Maps domains in the root layout.
