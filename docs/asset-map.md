# Asset map — claude/promoshop-staging-qa-HsyTJ

This branch addresses Abigail's staging QA punch list. Several assets need real
files committed to `public/` before the Vercel preview will render correctly.
This doc records which code references still point at placeholders and which
mainmemory files (branch `claude/promoshop-staging-qa-HsyTJ` of
`VicRobNes/mainmemory`) should fill them.

## Code → asset status

| Code reference | Status | Mainmemory source |
| --- | --- | --- |
| `/images/promoshop-studio-logo.png` (home hero + header) | **NEEDS FILE** | `Promoshop logo (2).png` |
| `/images/about-storefront.jpg` (about hero) | **NEEDS FILE** | best exterior shot from `rephotosforpromoshop.zip` |
| `/images/slideshow/slide-01.jpg` … `slide-03.jpg` (home slideshow) | **NEEDS FILE** | selected images from `1.png` … `11.png` — mapping TBD with Abigail |
| `/brands/*.svg` (brand logo scroll) | **NEEDS FILES** | brand logo files in `rephotosforpromoshop.zip` |
| `/images/hero-merchandise.jpg` | ✅ already on branch | — |

## Outstanding questions for Abigail

1. **Slideshow mapping** — which of `1.png`…`11.png` (or which files inside
   `rephotosforpromoshop.zip`) are the hero slideshow images? I currently
   reference `slide-01.jpg`…`slide-03.jpg` as placeholders.
2. **About hero** — is there a preferred storefront photo? I'll use the first
   clearly-exterior shot from the zip unless you flag a specific file.
3. **Brand logos** — do you have SVG versions? PNG fallbacks are fine; the
   brand-logo-scroll component accepts either.
4. **About body copy** — the "Promoshop Canada Ltd. is a Top 40…" paragraph in
   `lib/cms/about.ts` is my best interpretation from the email summary. Please
   paste the exact boilerplate so I can replace it verbatim.

## How to add assets

Drop binaries directly into `public/` (or the appropriate subfolder) on this
branch. The Next.js `<Image>` components on Home, About, and Brand Scroll will
pick them up automatically via the paths listed above.
