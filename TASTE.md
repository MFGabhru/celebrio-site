# Celebrio taste rules

Binding for every build. Re-read before touching the site.

**Supersedes** the earlier bright, playful palette (coral / marigold / blush, Fraunces + Nunito UI), per Ketan's Nov 10, 2026 ask: "Make the website appearance and interface look like these attached pictures. Very clean and chic."

## Look
- Clean and chic, modeled on Ketan's Nov 10 references: cream + oxblood + black, tight neo-grotesk two-tone headlines, compact rectangular buttons, giant wordmark footer.
- Palette: cream `#E9E4D8` (page), paper `#F3EFE6` (cards/bands), white cards, oxblood `#2E1513` / `#3A1A17` (statement + pricing bands), accent button `#7A2E2E`, black `#0B0B0B` footer.
- Coral `#E2553F` survives only as the dot in "celebrio." — never as a fill or a button.
- Alternate cream and oxblood sections. One satin-gradient panel (features). Thin hairlines, generous whitespace.

## Type
- Site UI uses one family: **Inter Tight**, self-hosted in `assets/fonts/` (no CDN), for all UI and headlines.
- Card art (the product) may use the self-hosted card library only: Fraunces, Playfair Display, Cormorant Garamond, Pinyon Script, Caveat, Fredoka, Josefin Sans, Space Mono (all SIL OFL, listed in `assets/fonts/README.md`). Never load a card font from a CDN, and never use a card font in the site UI.
- Headlines: weight 500, negative tracking (-0.04em to -0.055em), two-tone — dark words then muted taupe words (`.tone`).
- Body copy at least 16px. Muted text `#5E554D` on cream (5.7:1). Taupe `#857A70` is for large headline words only (3.3:1, large-text AA). On oxblood, muted text is `#B9A79C` (7.4:1).

## Components
- Buttons: compact rectangles, 8px radius, 44px tall. Primary = oxblood fill, white text. Secondary = white with hairline.
- Eyebrows: small pill tags with a tiny dark icon dot.
- Header: floating white pill (logo + square oxblood menu button) top-left, actions top-right. On phone the menu button opens a clean sheet with every category — no clipped scrolling nav.
- Footer: black, link columns, demo newsletter, giant cream "celebrio." wordmark filling the width.

## Cards
- Every design must be visually distinct: unique layout family + palette + ornament; never colour-swaps of one layout. `node scripts/check-designs.js` must pass before a commit.
- Ornaments are drawn inline SVG in the card's own colours. No emoji, stock clip-art or grey boxes.
- Card text is sized in container units so a thumbnail, the editor, the envelope and the print are the same design.
- Magic invite always offers several genuinely different options: four at once, each with its own wording voice, layout, palette, type and artwork. Label it honestly as drafting from your details in the browser; never call it a hosted AI.
- Occasion coverage stays broad: weddings and everything around them, birthdays, baby and kids, parties (house, dinner, BBQ, game and watch nights), college, office, holidays across faiths, religious milestones, memorials and fundraisers, and greeting cards. New occasions get designs, Magic wording in all four voices, and a place in the gallery's category chips and search.
- Fun, never crude: college and bachelor copy can be playful, but no drinking games, innuendo or put-downs. Sombre occasions get gentle wording and no confetti.

## Honesty
- No invented stats, traffic, customers, logos, or social accounts. Numbers on the page are counted from the code (designs, occasions, layouts) or are the real prices ($0 to design, $12 once per card).
- Demo-only controls (newsletter, demo pass, contact) say so.
- Show real card designs, never grey boxes or emoji.
