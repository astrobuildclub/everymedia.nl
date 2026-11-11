# Changelog

Alle noemenswaardige wijzigingen aan dit project. Nieuwste bovenaan.
Format gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/).

Categorieën: **Toegevoegd**, **Gewijzigd**, **Opgelost**, **Verwijderd**, **Beveiliging**, **Onderhoud**.

## [Unreleased]

### Toegevoegd
- Page transitions (Astro `<ClientRouter />`, standaard-fade) en laadbalk bij navigeren volgens `_standards/TRANSITIONS.md` laag 1 + 2; alle componentscripts starten per pagina (`astro:page-load`) en ruimen Swiper/Lenis op bij het wisselen
- Projectoverzicht: filters op projecttype (dropdown) en doelgroep (pillen) via URL-parameters (`?type=…&doelgroep=…`); Studio: documenttype *Project type* en velden *Project type* + *Audiences* op projecten
- Projectkaarten (home, overzicht, related work) zijn in hun geheel klikbaar (stretched link) met focusring op de kaart
- FAQ: de hele rij van een vraag is klikbaar (padding in de knop); `aria-expanded`/`aria-controls`, `<h3>` om de knop i.p.v. erin

### Gewijzigd
- Blauwe knoppen (`.black-btn`) zijn nu zwart via tokens `--btn-bg` / `--btn-bg-hover` / `--btn-text`

### Opgelost
- Audience-pagina's: Cards- en Work Selection-blok stonden in een kolom van 1px; `grid-template-columns: 1` (ongeldig) werd door lightningcss sinds Astro 7 omgezet naar `1px`
- Console-fout over `/src/styles/global.css` (dubbele stylesheet-link) en ongeldige `font-weight: medium`
- Projectoverzicht toonde projecten uit alle talen
- Projectkaarten: thumbnail werd bij hover hoger; vaste 16:9-uitsnede (`object-fit: cover`), zoom blijft binnen de container
- Netlify: productiebuild na release `staging → main` werd overgeslagen (`ignore` vergeleek met de site-brede `$CACHED_COMMIT_REF` = de deploy preview van dezelfde code); vergelijkt nu ook met de vorige commit

## [2026-11-11]

### Toegevoegd
- `/admin` en `/studio`: korte link (302) naar de Sanity Studio.
- Visual Editing volgens `_standards/SANITY.md` §3: `/api/preview` (secret uit de Presentation tool) zet een ondertekende cookie; drafts alleen in de Studio-iframe (`src/middleware.ts`). Eigen `VisualEditing.tsx` met history-adapter.

### Beveiliging
- `?preview=true` en `PUBLIC_SANITY_VISUAL_EDITING_ENABLED` verwijderd: daarmee kon iedereen drafts zien.

### Gewijzigd
- Deploy-workflow volgens `_standards/DEPLOY.md`: features via PR naar `staging` (branch deploy op `staging--everymedia.netlify.app`), gebundelde releases naar `main`. Branch protection op `staging`.
- `netlify.toml`: geen build bij commits met alleen documentatie.

### Beveiliging
- `npm audit fix` (zonder force); `ajv@8` override voor build-compatibiliteit
- Veilige bumps: studio SEO/link plugins; overrides `undici` / `@fastify/busboy`
- Swiper 11 → 14 (critical prototype pollution)
- `@sanity/assist` 3 → 6; `sanity-plugin-note-field` → 3
- Openstaand: 1 critical `decompress` via `@sanity/document-internationalization` 6 (vereist Sanity/React major)

### Toegevoegd
- Mediablok (`blockMediaGallery`) is nu een Swiper-carousel met vorige/volgende-knoppen (echte `<button>`s met aria-label, zichtbare focus, disabled aan begin/eind) en optionele autoplay met pauzeknop; geen autoplay of slide-animatie bij `prefers-reduced-motion`
- Image Gallery krijgt dezelfde toegankelijke pijlknoppen (gedeelde `lib/carousel.ts` + `CarouselNav.astro`)
- Studio: uitleg en validatie bij video-URL-velden (directe Vimeo-bestandslink i.p.v. vimeo.com-paginalink)

### Opgelost
- Studio: documenteditor crashte (`useEffectEvent is not a function`) doordat `@sanity/assist` 6 React 19.2 vereist; terug naar `@sanity/assist` 5.0.4 (React 18 + Sanity 3)
- Doelgroepenblok: horizontale scroll werkte niet in productie (ook niet op live); lightningcss vouwde `animation` + `animation-timeline` samen tot een vorm die Chrome negeert. Nu losse longhands
- Doelgroepenblok: werkt nu ook zonder scroll-driven animations (Firefox, oudere Safari) en bij `prefers-reduced-motion` als swipebare rij; titel uit het CMS wordt getoond; video vult de kaart; hoogte schaalt met het aantal doelgroepen; toetsenbordfocus scrolt naar de kaart
- Swiper-carousels (galerij, afleveringen, projecten) zaten elkaar in de weg via de globale `.swiper`-selector
- Video: autoplay-loops respecteren `prefers-reduced-motion`; MP4-video zonder autoplay krijgt player-knoppen; geen externe placeholder-poster meer; MIME-type wordt niet meer geforceerd
- Text-blok: titel verdween als `hideTitle` nooit was aangeraakt
- Video- en Image-blok zonder gekozen formaat vallen terug op „page” (anders ongestyled)
- Netlify productie-404: SSR `.netlify` na build naar repo-root kopiëren (in `npm run build`)
- i18n: `prefixDefaultLocale: true` zodat `/nl/...`-routes werken (was 404 lokaal)

### Onderhoud
- `.github/dependabot.yml`: wekelijkse updates naar `staging`, gegroepeerd (Astro, Sanity, minor/patch).
- Astro 5 → 7; `@astrojs/netlify` 6 → 8
- Studio: React `compiler-runtime` Vite-alias; DI gepind op 3.3.3
- Ongebruikte imports/variabelen opgeruimd (astro check hints)
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
