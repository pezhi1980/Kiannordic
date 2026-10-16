# Kian Nordic — kiannordic.io

Statisk hjemmeside bygget med [Astro](https://astro.build). Dansk er hovedsprog (`/`), engelsk ligger på `/en/`.

## Kom i gang

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output i dist/
```

## Hvor ændrer jeg hvad?

| Hvad | Fil |
|---|---|
| E-mail, CVR-nr. | `src/config.ts` |
| Al tekst (DA + EN), ydelser, projekter | `src/i18n/content.ts` |
| Farver, typografi, layout | `src/styles/global.css` |
| Privatlivspolitik | `src/components/Privacy.astro` |
| Fjord-animationen i toppen | `src/components/Fjord.astro` |

## Sider

- `/` og `/en/` — forside
- `/privatliv` og `/en/privacy` — privatlivspolitik (GDPR)

## Deploy

Fungerer direkte på Vercel, Netlify eller Cloudflare Pages: build-kommando `npm run build`, output-mappe `dist`. Peg derefter `kiannordic.io` på hostingen.

## GDPR

Ingen cookies, ingen analytics, skrifttypen (Schibsted Grotesk) er selv-hostet. Derfor er der ikke brug for et cookie-banner. Tilføjer du analytics senere, skal privatlivspolitikken opdateres, og der skal muligvis et samtykke-banner på.
