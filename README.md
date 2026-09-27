# OKLCH Color Picker

An interactive, perceptually-uniform color picker built on the **OKLCH** color space — pick colors by lightness, chroma, and hue, see live conversions to RGB / HEX / OKLCH, generate palettes, and export them as SVG.

## What It Does

OKLCH is a perceptually uniform color space (a better-designed successor to HSL): equal steps in lightness and chroma look like equal steps to human eyes. This app gives you a visual playground for it:

- **Interactive color spectrum** — click-and-drag on a 2D gamut map to pick any color
- **L / C / H sliders and numeric inputs** — fine-tune lightness, chroma, and hue with sliders or type exact values
- **Live conversions** — every pick shows the equivalent HEX, RGB, and OKLCH values
- **One-click copy** — copy any value (HEX / RGB / OKLCH) to the clipboard
- **Palette generator** — generate tint/shade palettes from the current color, control step count and tint strength
- **SVG palette export** — download the generated palette as an SVG swatch file
- **Dark/light aware UI** — polished shadcn/ui components with toast feedback

## Tech Stack

- **Next.js 15** (App Router) — `output: "export"` static build
- **React 19**, **TypeScript**
- **Tailwind CSS 3** + **shadcn/ui** components (Radix UI primitives)
- **culori** — OKLCH ↔ RGB/HEX color math
- **lucide-react** — icons

## Quick Start

```bash
# install (npm works; pnpm also fine)
npm install

# run locally
npm run dev
# open http://localhost:3000

# production build (static export -> out/)
npm run build
```

No environment variables, no backend, no database — everything runs in the browser.

## Project Structure

```
app/
  page.tsx          # home page, renders the picker
  layout.tsx        # root layout + theme provider
  globals.css       # Tailwind + custom styles
components/
  OKLCHColorPicker.tsx  # main picker UI (state, conversions, copy)
  ColorSpectrum.tsx     # 2D draggable gamut map
  Slider.tsx            # labeled slider wrapper
  NumberInput.tsx       # numeric L/C/H inputs
  ui/                   # shadcn/ui primitives (button, card, input, slider, toast…)
utils/
  colorConversions.ts   # oklchToRgb / oklchToHex / validation / SVG palette
public/                 # static assets
```

## How It Works

1. The `ColorSpectrum` canvas maps the OKLCH gamut slice for the current hue; dragging updates chroma/lightness.
2. `OKLCHColorPicker` holds L/C/H state; `culori` converts OKLCH → RGB/HEX on every change.
3. Palette generation derives tints and shades by scaling lightness/chroma around the base color; the SVG export serializes swatches into a standalone `.svg`.

## Deployment

Deployed as a **static site** — the Next.js build exports to `out/` and is served from GitHub Pages:

- Live: https://girishlade111.github.io/oklch-color-picker/

Note: `next.config.mjs` sets `basePath: "/oklch-color-picker"` for the GitHub Pages subpath. If you deploy this to a root domain (Vercel, Netlify, Cloudflare Pages), remove the `basePath` line and rebuild.

## Development Notes

- Next.js pinned to 15.2.8 (security fix for CVE-2025-55182, Dec 2025 advisory)
- Build ignores ESLint/TypeScript errors (`ignoreDuringBuilds` / `ignoreBuildErrors`) to keep static export friction-free
- Images set to `unoptimized` — required for static export
- Originally scaffolded with [v0](https://v0.app); customized after export

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
