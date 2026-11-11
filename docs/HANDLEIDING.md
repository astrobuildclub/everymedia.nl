# Handleiding: website Every Media beheren

Voor iedereen bij Every Media die content op de website zet. Je hebt geen technische kennis nodig.

- **Website (testomgeving):** https://everymedia.netlify.app. Hier staat de nieuwe site tot hij op everymedia.nl live gaat.
- **CMS (Sanity Studio):** https://every-media.sanity.studio. Kort: ga naar `/admin` op de website.
- **Vragen:** All This (zie de mail met contactgegevens).

---

## 1. Inloggen

1. Ga naar https://every-media.sanity.studio.
2. Log in met het account waarvoor je een uitnodiging van Sanity hebt gekregen (Google, GitHub of e-mail + wachtwoord).
3. Geen uitnodiging gehad, of zie je "no access"? Vraag All This om je toe te voegen aan het project **Every Media**.

> Deel je inlog nooit. Iedere collega krijgt een eigen uitnodiging. Zo blijft zichtbaar wie wat heeft aangepast.

---

## 2. Rondleiding door de Studio

Bovenin staan drie tabbladen:

| Tabblad | Waarvoor |
|---|---|
| **Structure** | Alle content in lijsten: pagina's, projecten, doelgroepen, enz. Hier werk je meestal. |
| **Presentation** | De website met de Studio ernaast. Klik op een tekst of beeld op de site en het juiste veld opent. Ideaal om te controleren hoe iets eruitziet vóór je publiceert. |
| **Vision** | Technisch zoekgereedschap. Niet nodig voor redactie. |

Links in **Structure** staat de content, telkens per taal (nu alleen **NL**):

| Onderdeel | Wat is het | Waar op de site |
|---|---|---|
| **Pages** | Losse pagina's: home, over ons, contact, projectenoverzicht | `/nl/…` |
| **Audience** | Doelgroeppagina's (Merken, Rijksoverheid, TV & Streaming) | `/nl/audience/…` |
| **Project** | Cases/projecten | `/nl/projects/…` |
| **Frequently Asked Question** | Losse vragen + antwoorden, te tonen via het FAQ-blok | waar je het blok plaatst |
| **Team** | Teamleden (naam, rol, foto, contact) | via het Team Members-blok |
| **Site Settings** | Algemene instellingen: sitenaam, SEO, social, contact, header en footer | hele site |

---

## 3. Basiswerkwijze: bewerken, controleren, publiceren

1. Open een document (bijv. een project).
2. Pas velden aan. Sanity slaat automatisch op als **concept (draft)**. Bezoekers zien dit nog niet.
3. Controleer via **Presentation** hoe het eruitziet. Daar zie je je concept op de echte site.
4. Klik rechtsonder op **Publish**. Binnen een paar seconden staat het live.

Handig om te weten:

- **Terugdraaien:** via het klokje (History) rechtsboven kun je een eerdere versie terugzetten.
- **Concept weggooien:** menu (⋯) naast Publish › *Discard changes*.
- **Offline halen:** menu (⋯) › *Unpublish*. De pagina is dan niet meer bereikbaar, de inhoud blijft bewaard.
- **Verwijderen** kan niet ongedaan worden gemaakt. Kies bij twijfel *Unpublish*.

---

## 4. Een nieuw project toevoegen

1. **Structure › Project › NL** › rechtsboven het potlood/plus (*Create new*).
2. Tab **Hero**:
   - **Page Title**: interne naam, alleen zichtbaar in de Studio.
   - **Slug**: het webadres, bijv. `anne-frank-video-dagboek`. Klik *Generate* om hem uit de titel te maken. Gebruik kleine letters en streepjes, geen spaties.
   - **Title / Subtitle / Intro**: de tekst bovenaan de pagina.
   - **Select**: kies *Video* of *Image* voor de grote headerbeelden.
     - Video: plak een **directe videolink** (zie §7).
     - Image: upload een afbeelding en vul de **alt-tekst** in (zie §6).
   - **Client** en **Award**: optioneel, worden als label getoond.
3. Tab **Content**: bouw de pagina op met blokken (zie §5).
4. Tab **SEO**: titel en omschrijving voor Google en social media (zie §8).
5. Controleer in **Presentation** › **Publish**.

Een **doelgroep** (Audience) of **pagina** (Page) maak je op dezelfde manier. Bij Pages kies je ook een **Variant**: Homepage, Audience, Project of Page. Die bepaalt de opmaak van de hero.

---

## 5. Pagina's opbouwen met blokken

In het veld **Pagebuilder / Content** voeg je blokken toe met **+ Add item**. Sleep blokken aan het handvat (⋮⋮) om de volgorde te wijzigen.

| Blok | Wat het doet | Tips |
|---|---|---|
| **Intro** | Grote openingstekst | Kort houden: één of twee zinnen. |
| **Text** | Titel + tekst | Met *Hide title* verberg je de titel op de site. |
| **RichText** | Langere opgemaakte tekst met voetnoot | Voor achtergrondverhalen. |
| **Text Media** | Tekst naast een afbeelding | Kies links of rechts bij *Alignment*. |
| **Image** | Eén afbeelding | *Size* bepaalt de breedte. Leeg = paginabreed. |
| **Image Gallery** | Carousel met afbeeldingen | Bezoekers bladeren met pijltjes of swipen. |
| **Media Gallery** | Carousel met afbeeldingen, met titel | *Autoplay* laat de slides zelf wisselen (elke 5 s), met pauzeknop. Staat standaard uit. Bezoekers met "beperk beweging" krijgen nooit autoplay. |
| **Video** | Eén video | Zie §7. |
| **Episodes** | Reeks afleveringen (YouTube/Vimeo) | Per aflevering een titel, omschrijving, video-ID en thumbnail. |
| **Audiences Carousel** | Doelgroepkaarten die horizontaal meeschuiven bij scrollen | Kies 2 of meer doelgroepen. De titel komt als kop boven het blok. |
| **Feat Projects** / **Featured Projects** | Uitgelichte projecten | Kies projecten uit de lijst. |
| **Work Selection** / **Related Work** | Selectie of gerelateerde projecten | Onderaan projectpagina's: *Related Work*. |
| **Projects Listing** | Overzicht van alle projecten | Voor de projectenpagina. |
| **Cards** | Kaarten in 2–4 kolommen | Voor diensten of USP's. |
| **Multi Column Block** | Meerdere kolommen tekst/media | De titel is alleen voor de Studio. |
| **Testimonial** | Quote met naam, rol, bedrijf en foto | De titel is alleen voor de Studio. |
| **Logo** | Rij met klantlogo's | Gebruik logo's met transparante achtergrond (PNG/SVG). |
| **Team Members** | Teamleden uit *Team* | Kies personen. Volgorde = volgorde in de lijst. |
| **FAQs** | Vragen uit *Frequently Asked Question* | |
| **Contact** | Contactblok met afbeelding en knop | |

---

## 6. Afbeeldingen

- **Formaat:** upload het origineel (JPG of PNG, liefst minimaal 2400 px breed). De site maakt zelf kleinere, snelle versies.
- **Uitsnede:** klik op het potlood bij een afbeelding om het **hotspot**-punt te zetten: het deel dat altijd in beeld blijft bij bijsnijden.
- **Alt-tekst (verplicht invullen):** beschrijf in één zin wat er te zien is, voor blinde en slechtziende bezoekers en voor Google. Bijvoorbeeld: *"Cameraman filmt een interview in een studio met groen licht"*. Puur decoratief beeld? Beschrijf kort de sfeer.
- **Caption:** optioneel onderschrift.

---

## 7. Video's

Er zijn twee soorten video op de site.

### a. Achtergrond-/loopvideo (hero, doelgroepkaarten, Video-blok met type *MP4*)

Speelt automatisch, zonder geluid en zonder player. Hiervoor is een **directe link naar het videobestand** nodig, geen gewone Vimeo-link.

**Zo vind je die link in Vimeo:**

1. Open de video in Vimeo.
2. Ga naar **Delen** (Share) › **Distributie** › **Videobestandslinks** (Video file links). Dit kan per abonnement iets anders heten.
3. Kopieer de link van de **1080p**-versie. Die ziet er zo uit:
   `https://player.vimeo.com/progressive_redirect/playback/123456789/rendition/1080p/file.mp4?loc=external&signature=…`
4. Plak die link in het videoveld.

**Werkt niet:**

- `https://vimeo.com/123456789` (een Vimeo-pagina)
- `https://player.vimeo.com/video/123456789` (een embed-player)
- YouTube-links

De Studio geeft bij zo'n link een rode foutmelding.

**Tips:**

- Exporteer loops als **H.264 MP4**. HEVC/H.265 speelt niet in alle browsers (o.a. Firefox).
- Houd loops kort (10–30 s) en licht (bij voorkeur < 15 MB). Dan laadt de pagina snel.
- Bezoekers die "beperk beweging" aan hebben staan, zien het eerste beeld in plaats van een bewegende video.

### b. Video met player (Video-blok met type *Embed*, of *MP4* zonder autoplay)

- **Embed:** kies *YouTube* of *Vimeo* en vul alleen het **video-ID** in.
  - YouTube: het deel na `v=` in `youtube.com/watch?v=`**`dQw4w9WgXcQ`**.
  - Vimeo: het nummer in `vimeo.com/`**`123456789`**.
- **MP4 zonder autoplay:** de bezoeker krijgt play/pauze- en geluidsknoppen.
- **Size:** de breedte van het blok. Leeg = paginabreed.

---

## 8. SEO en delen op social media

Elke pagina, elk project en elke doelgroep heeft een tab **SEO**:

- **Meta title:** de titel in Google, ± 50–60 tekens.
- **Meta description:** de korte omschrijving in Google, ± 140–160 tekens.
- **Afbeelding:** het plaatje bij delen op LinkedIn, WhatsApp, enz. (1200 × 630 px).

Algemene SEO, social-links en contactgegevens staan in **Site Settings**.

---

## 9. Talen

De site is nu alleen **Nederlands**. Engelse pagina's (`/en/…`) bestaan nog niet. Wil Every Media later een Engelse versie, dan zet All This die taal aan. Je vertaalt dan per document via het vertaalmenu (met hulp van Sanity AI Assist).

---

## 10. Header, footer en navigatie

**Site Settings › NL**:

- **Header:** menu-items en de knop rechtsboven.
- **Footer:** links, adres, social media.
- **Contact:** e-mail en telefoon die op de site terugkomen.

Wijzigingen hier gelden voor de hele site. Controleer na publiceren een paar pagina's.

---

## 11. Veelvoorkomende problemen

| Probleem | Oplossing |
|---|---|
| Wijziging niet zichtbaar op de site | Is er op **Publish** geklikt? Ververs de pagina (Cmd/Ctrl + Shift + R). |
| Video speelt niet | Is het een directe `…/file.mp4`-link (§7)? Is het bestand H.264? Open de link los in de browser: speelt hij daar? |
| Pagina geeft "404" | Klopt de **slug**? Is het document gepubliceerd (niet alleen concept)? |
| Rode melding bij een veld | Lees de melding. Vaak een verplicht veld of een verkeerde videolink. |
| Presentation laadt niet of toont een andere site | Laat het All This weten. |

---

## 12. Testomgeving en live (voor de volledigheid)

- **https://everymedia.netlify.app**: de nieuwe site (productie, nog zonder eigen domein).
- **https://staging--everymedia.netlify.app**: testomgeving voor nieuwe functies van All This, voordat ze live gaan.
- Content (teksten, beelden) is op beide omgevingen **hetzelfde**: alles wat je in de Studio publiceert, staat direct op beide.
- Het domein **everymedia.nl** wijst nog naar de oude Wix-site, tot de overstap (zie de mail voor de stappen).
