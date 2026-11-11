# AGENTS.md: Every Media

Instructies voor AI-agents (Claude Code, Cursor, Codex) en ontwikkelaars die aan dit project werken.
Lees eerst `README.md` voor context en `CHANGELOG.md` voor recente wijzigingen.

## Project
- Klant: Every Media · Bedrijf: All This · SLA: TODO
- Stack: Astro 5, Sanity 3, Node 22 (zie `.nvmrc`)
- Monorepo: `astro-app/` (frontend) + `studio/` (Sanity Studio)
- Status: WIP · gepauzeerd — meest recente werk op `Mieras-Fixes-for-Live`

## Werkwijze
- Werk nooit direct op `main`. Branch vanaf `staging` → PR naar `staging` → deploy preview → merge. Naar `main` alleen gebundelde releases en hotfixes, volgens `~/Code/_standards/DEPLOY.md` (elke productiedeploy kost Netlify-credits).
- Branchnamen: `feat/…`, `fix/…`, `chore/…`, `docs/…`.
- Commit nooit `.env`-bestanden of tokens. Nieuwe variabelen: naam toevoegen aan `.env.example` en de README-tabel.
- Variabelen met `PUBLIC_` komen in de browser terecht: nooit voor tokens.
- Nooit force-push; nooit pushen naar `main` zonder PR.

## Documentatie bijhouden (verplicht)
- Elke wijziging die je commit: voeg een regel toe onder `## [Unreleased]` in `CHANGELOG.md`.
- Bij een release (`staging → main`): zet `[Unreleased]` om naar een datumkop.
- Verandert setup, env, stack of deploy? Werk `README.md` bij.

## Conventies
- Moderne CSS: custom properties, logical properties; bestaand design behouden.
- Toegankelijkheid: WCAG 2.2 AA. Semantische HTML, focus-states, `prefers-reduced-motion` respecteren.
- AVG: cookie consent via `vanilla-cookieconsent`; geen tracking zonder consent.
- i18n: routes onder `[locale]`; Sanity document-internationalization.

## Projectspecifiek
- Sanity project ID: `mqkdg673`, dataset: `production`.
- Netlify SSR (`output: "server"`, `@astrojs/netlify`).
- Studio presentation/preview: `studio/presentation/resolve.ts`.
- Archiefbranch `archive/sanity-preview` bevat oude live-preview-werkzaamheden; niet mergen zonder review.
- Security-audit: `docs/SECURITY_AUDIT-2025-12.md`.
