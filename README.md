# Every Media

> Website voor Every Media — Astro frontend met Sanity CMS (monorepo).

| | |
|---|---|
| **Klant** | Every Media |
| **Bedrijf** | All This |
| **Status** | WIP · gepauzeerd |
| **SLA** | TODO |
| **Live** | TODO (nog geen productie-deploy) |
| **Netlify** | site [`everymedia`](https://app.netlify.com/projects/everymedia) · [![Netlify Status](https://api.netlify.com/api/v1/badges/b78e2733-4ead-4934-af45-58a77f2c8158/deploy-status)](https://app.netlify.com/projects/everymedia/deploys) |
| **CMS** | Sanity project `mqkdg673`, dataset `production`, Studio: https://every-media.sanity.studio |
| **Repo** | https://github.com/astrobuildclub/everymedia.nl |
| **Notion** | TODO |

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
| `SANITY_API_READ_TOKEN` | Drafts / visual editing (geheim) | sanity.io/manage → API → Tokens |
| `PUBLIC_SANITY_STUDIO_URL` | Studio-URL voor stega/preview | lokaal of deployed Studio |
| `PUBLIC_SANITY_VISUAL_EDITING_ENABLED` | Visual editing aan/uit | `"true"` / `"false"` |
| `VITE_SITE_URL` | Site-URL (sitemap / preview) | Netlify URL of localhost |
| `SANITY_STUDIO_PREVIEW_URL` | Preview-URL in Studio | zelfde als site-URL |

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

- Status WIP · gepauzeerd; meest recente werk zat op `Mieras-Fixes-for-Live` (nu via PR #2 in `main`).
- Repo is public (nodig voor Netlify CD op het huidige plan).
- `@sanity/assist` 6 peer-waarschuwing op Sanity 3 — studio-build OK; Sanity 5/6 later.
- Live URL en Notion-link: TODO.

## Contact

Eigenaar: Maarten Mieras (All This) · Zie `CHANGELOG.md` voor wat er gedaan is.
