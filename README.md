# Celebrio

Celebrio is a stationery desk for invitations and greeting cards. The line on the door is **Cards worth opening.**

Designing is free. Download, print, and sending a guest link are paid. This copy is a self-contained demo: one `index.html`, no build step, no account, no server.

## Open it

From this folder:

```bash
python3 -m http.server 47321
```

Then open [http://127.0.0.1:47321/](http://127.0.0.1:47321/). Any static server works. Opening `index.html` directly also works for the hash routes; a local server is kinder to the clipboard and the print dialog.

## Design

Clean and chic: cream, oxblood and black, Inter Tight two-tone headlines. Cards use their own self-hosted type library (nine OFL families). Fonts are self-hosted in `assets/fonts/`. Rules live in [TASTE.md](TASTE.md).

The card system lives in `index.html`: 16 layout families, 53 drawn SVG ornaments, 31 palettes, 10 type pairings, 7 textures, 7 borders and 3 shapes. Every design has its own layout + palette + ornament. Check it with:

```bash
node scripts/check-designs.js --tags
```

## Five-minute tour

1. **Home** — [http://127.0.0.1:47321/#home](http://127.0.0.1:47321/#home). Hero with real card designs, the oxblood statement and honest stats, features, occasion tiles, Magic invite, the sample RSVP, pricing, and FAQ.
2. **Designs** — [All designs](http://127.0.0.1:47321/#invitations): search, occasion chips (Wedding, Birthday, Baby & kids, Parties, College, Office, Holidays, Milestones, Memorial & causes, Greeting cards) and sub-occasion filters. The count on the page is counted from the code.
3. **Customize** — open any card, for example [Mia’s birthday](http://127.0.0.1:47321/#design-birthday-0). Tabs for Words (every field, alignment, text size), Layout (your words in all 16 layouts, shape, border), Colour (palettes, your own paper/ink/accent, texture), Type (10 pairings), Art (53 ornaments, on/off, a photo that stays on the device) and Send. On a phone the tabs are a bottom sheet. Everything is saved in this browser.
4. **Magic invite** — [http://127.0.0.1:47321/#magic](http://127.0.0.1:47321/#magic). Describe the occasion (or pick one of 60+), add names, a date and details, and it drafts four different cards in four voices. **Use this** opens it in the editor; **More like this** keeps the voice; **Shuffle** never repeats a line. It is a wording library and design rules running in the browser, not a hosted AI model.
5. **Paywall** — on the card, Download, Print, and Share link explain the $12 pass before they run. **Unlock demo on this device** is a local switch. It does not charge a card. Remove it from [Pricing](http://127.0.0.1:47321/#pricing).
6. **Envelope** — [the sample](http://127.0.0.1:47321/#c/DEMO), or Preview envelope from a card you edited. Sealed flap, then the card, then Yes / Maybe / No.
7. **Host list** — [RSVP](http://127.0.0.1:47321/#rsvp). Headcount and the guest table, including replies from the envelope on this browser.
8. **Trust pages** — [Pricing](http://127.0.0.1:47321/#pricing), [Privacy](http://127.0.0.1:47321/#privacy), [Terms](http://127.0.0.1:47321/#terms).

Other routes: `#<occasion>` (for example `#office`), `#edit/<draft>` for Magic drafts, `#about`, `#blog`, `#contact`, `#guest`.

## What is demo, and what a live desk would add

| In this browser | Later, if Celebrio is hosted |
| --- | --- |
| Every design, Magic invite, and the live editor are free. Photos stay in this browser | Same |
| Preview the envelope on this device for free | A real preview for the host |
| Unlock, download, and print are a local flag. The price shown is $12 once per card. Nothing is billed | A one-time charge per card, then a file and a hosted link |
| The guest link and QR open the envelope only where that card is saved (`localStorage` key `celebrio.v1`) | The same link opens on a guest’s phone |
| RSVP answers stay on this device | The host sees replies from anywhere |
| The contact form does not send email | A real inbox |
| Print is the browser print dialog (5×7, 5.5×5.5 or 7×5 by shape). Download is an SVG that embeds the card’s fonts and artwork | A print partner, if you want one |

There is no countdown, no pre-checked add-on, and no trial that renews. Clear site data for this origin to wipe the demo.

The footer mentions the interaction ideas once. Celebrio is not that other demo, and it is not affiliated with it.
