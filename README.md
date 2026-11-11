# Every Media

> Website voor Every Media — Astro frontend met Sanity CMS (monorepo).

| | |
|---|---|
| **Klant** | Every Media |
| **Bedrijf** | All This |
| **Status** | Actief · content vullen door Every Media (nov 2026) |
| **SLA** | TODO |
| **Live** | https://everymedia.netlify.app (domein everymedia.nl draait nog op Wix) |
| **Netlify** | site [`everymedia`](https://app.netlify.com/projects/everymedia) · [![Netlify Status](https://api.netlify.com/api/v1/badges/b78e2733-4ead-4934-af45-58a77f2c8158/deploy-status)](https://app.netlify.com/projects/everymedia/deploys) |
| **CMS** | Studio: https://every-media.sanity.studio (kort: `/admin` op de site) · Sanity project `mqkdg673`, dataset `production` |
| **Repo** | https://github.com/astrobuildclub/everymedia.nl |
| **Notion** | [Repo](https://app.notion.com/p/allthis/everymedia-nl-3f3a146292448182b100ceee18bda0da) · [Project](https://app.notion.com/p/allthis/Every-Media-15aa146292448068af77e3b879b56b28) |

## Stack

- Astro 7 · Sanity 3 · Node 22
- Styling: CSS (custom) · Animatie: Lenis (smooth scroll); Swiper 14
- Hosting: Netlify (SSR via `@astrojs/netlify` 8; build kopieert `astro-app/.netlify` → root)


## Lokaal starten

```bash
nvm use          # Node 22
npm install
cp astro-app/.env.example astro-app/.env   # vul geheime tokens in
cp studio/.env.example studio/.env         # optioneel
npm run dev      # Astro :4321 + Studio :3333
```

Afzonderlijk:

```bash
npm run dev --workspace=astro-app   # http://localhost:4321
npm run dev --workspace=studio      # http://localhost:3333
```

Build:

```bash
npm run build           # astro-app (Netlify)
npm run build:studio    # Sanity Studio
```

### Environment-variabelen

| Naam | Waarvoor | Waar te vinden |
|---|---|---|
| `PUBLIC_SANITY_STUDIO_PROJECT_ID` | Sanity project (`mqkdg673`) | sanity.io/manage |
| `PUBLIC_SANITY_STUDIO_DATASET` | Dataset (`production`) | sanity.io/manage |
| `SANITY_API_READ_TOKEN` | Visual Editing: drafts + ondertekende preview-cookie (server-only, rol Viewer) | sanity.io/manage → API → Tokens |
| `PUBLIC_SANITY_STUDIO_URL` | Studio-URL voor stega en de `/admin`-redirect | lokaal of https://every-media.sanity.studio |
| `VITE_SITE_URL` | Site-URL (sitemap / preview) | Netlify URL of localhost |
| `SANITY_STUDIO_PREVIEW_URL` | Site-URL voor de Presentation tool (Studio) | standaard `https://everymedia.netlify.app` bij `sanity deploy`, lokaal `http://localhost:4321` |

Waarden staan nooit in git. Productiewaarden staan in Netlify → Site configuration → Environment variables.

## Structuur

```
astro-app/          Astro frontend (SSR)
  src/components/   UI en pagebuilder-blocks
  src/layouts/      Paginalayouts
  src/pages/        Routes (i18n: [locale]/…)
  src/lib/          Sanity-client, router, helpers
  src/utils/sanity/ Queries en types
studio/             Sanity Studio
  schemaTypes/      Content- en block-types
  presentation/     Presentation/preview resolve
netlify.toml        Build & Node-versie
docs/               Audits en aanvullende docs
```

## Content en CMS

- **Studio:** https://every-media.sanity.studio, of `/admin` (en `/studio`) op de site: 302 naar `PUBLIC_SANITY_STUDIO_URL`.
- **Live preview (Visual Editing)** volgens `~/Code/_standards/SANITY.md` §3: de Presentation tool roept `/api/preview` aan met een secret, de site zet een ondertekende cookie en toont alleen in de Studio-iframe drafts. Bezoekers zien altijd de gepubliceerde versie. Content altijd via `loadQuery()` (`astro-app/src/lib/load-query.ts`).
- Na een wijziging in `studio/`: `npx sanity deploy` (vanuit `studio/`) om de gehoste Studio bij te werken.

Content types o.a.: pages, projects, audiences, FAQ, team, site settings, header/footer. Pagebuilder-blocks (text, media, cards, gallery, logos, contact, enz.). Document-internationalization voor meertalige content.

## Deploy

### Branches

| Branch | Deploy | URL |
|---|---|---|
| `main` | Productie | https://everymedia.netlify.app |
| `staging` | Branch deploy (goedgekeurde features, nog niet live) | https://staging--everymedia.netlify.app |
| PR's | Deploy preview | link in de PR |

Features gaan via een PR naar `staging`. Naar `main` alleen gebundelde releases (PR `staging → main`) en hotfixes. Commits met alleen documentatie (`*.md`, `.github/`) starten geen build. Zie `~/Code/_standards/DEPLOY.md`.

### Netlify

- Netlify-site: [`everymedia`](https://app.netlify.com/projects/everymedia) (gekoppeld aan deze repo)
- Build: `npm run build` + kopie `astro-app/.netlify` → `.netlify`; publish `astro-app/dist` (zie `netlify.toml`)
- UI: Base directory leeg; Package directory leeg; Publish `astro-app/dist`; géén `@netlify/plugin-astro`
- Nooit direct pushen naar `main`; nooit force-push

## Beveiliging

Zie [docs/SECURITY_AUDIT-2025-12.md](docs/SECURITY_AUDIT-2025-12.md) (audit 2025-12-29).

`npm audit` na cleanup: nog issues, o.a. 1 critical `decompress` via `@sanity/document-internationalization` 6 (vereist Sanity/React major — follow-up). Geen `npm audit fix --force`.

## Bekende issues en afspraken

- Sinds nov 2026 weer actief: Every Media vult content; plan van aanpak in Notion (project Every Media).
- Repo is public (nodig voor Netlify CD op het huidige plan).
- `@sanity/assist` staat op 5.x: versie 6 vereist React 19.2 en laat de documenteditor crashen. Pas na de upgrade naar Sanity 5+ weer bijwerken.
- Studio draait op Sanity-hosting; ingebouwd op `/admin` volgt na de upgrade naar Sanity 4+/React 19 (`SANITY.md` §0).

## Contact

Eigenaar: Maarten Mieras (All This) · Zie `CHANGELOG.md` voor wat er gedaan is.
