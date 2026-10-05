# Changelog

Alle noemenswaardige wijzigingen aan dit project. Nieuwste bovenaan.
Format gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/).

Categorieën: **Toegevoegd**, **Gewijzigd**, **Opgelost**, **Verwijderd**, **Beveiliging**, **Onderhoud**.

## [Unreleased]

### Onderhoud
- Projectdocumentatie volgens Code-standaard: README, CHANGELOG, AGENTS, CLAUDE
- Node 22 (`.nvmrc` + `netlify.toml`)
- `.claude/` toegevoegd aan `.gitignore`
- Security-audit verplaatst naar `docs/SECURITY_AUDIT-2025-12.md`
- Tokens uit `astro-app/.env.example` gehaald (placeholders)
- Vite-alias `react/compiler-runtime` → `react-compiler-runtime` (React 18 + Sanity build)
- `@types/react-dom` vastgezet op bestaande versie (`^18.3.7`)
- Netlify-site `everymedia` gedocumenteerd; CD-blokkade private org-repo genoteerd
- Root `npm run build` script (workspace astro-app) voor Netlify
- Font-paden Antarctica: `/fonts/...` i.p.v. `../../public/fonts/...`
- Netlify: geen `@netlify/plugin-astro` (bestaat niet); publish `astro-app/dist`

## [2025-12]

### Toegevoegd
- Netlify-configuratie en preview-URL handling
- Preview mode en verbeterde link handling

### Gewijzigd
- Dependencies bijgewerkt (Sanity, Astro, packages)
- Styles/layout componenten (header, blocks) op `Mieras-Fixes-for-Live`
- Sanity Studio URL-configuratie
- Remote images (cdn.sanity.io) in Astro image config

### Verwijderd
- Vercel-afhankelijkheid en -config
- Netlify Astro plugin (later opnieuw via adapter)

### Beveiliging
- Security audit uitgevoerd (zie `docs/SECURITY_AUDIT-2025-12.md`)

## [2025-07]

### Toegevoegd
- HeroHomePage-updates

### Gewijzigd
- Styles en layout diverse componenten
- Feedback-/designfixes (`mieras-edit`)

## [2025-06]

### Gewijzigd
- Preview-wijzigingen en Studio URL bijgewerkt

## [2025-04]

### Toegevoegd
- About- en contactpagina’s; volledige pagebuilder
- Cookie consent

### Gewijzigd
- Design- en sheet-fixes
- Studio build-fixes

## [2025-03]

### Toegevoegd
- Initiële Sanity CLI-setup en schema’s
- Astro frontend met homepage en Sanity-koppeling
- Pagebuilder-secties; studioHost
