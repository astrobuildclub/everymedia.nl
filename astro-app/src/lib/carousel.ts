import Swiper from "swiper";
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

/**
 * Toegankelijke Swiper-carousel.
 *
 * Verwacht deze markup (zie `components/commons/CarouselNav.astro`):
 *   <div data-carousel-root data-autoplay="true|false">
 *     <div class="swiper"><div class="swiper-wrapper">…slides…</div></div>
 *     <button data-carousel-prev> / <button data-carousel-next> / <button data-carousel-toggle>
 *   </div>
 *
 * - Vorige/volgende zijn echte <button>s; Swiper zet `disabled` aan begin en eind.
 * - Slepen met muis en swipen op touch (Swiper); de drag-cursor staat in
 *   `components/commons/DragCursor.astro`.
 * - Oneindig (loop). Elke stop zet een slide links, uitgelijnd met de content.
 *   Zonder loop geldt dat ook voor de laatste slide (zie `alignEnd`).
 * - Bij `prefers-reduced-motion: reduce` geen autoplay en geen slide-animatie.
 * - Autoplay heeft altijd een pauzeknop (WCAG 2.2.2).
 */

const AUTOPLAY_DELAY = 5000;
/** Minimaal aantal slides voor een soepele loop (bij ~2 slides in beeld). */
const MIN_LOOP_SLIDES = 6;
const SPEED = 400;

const reducedMotionQuery = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)");

/**
 * Loop heeft genoeg slides nodig: met 3 slides en 2,1 in beeld kan Swiper niet
 * rondlopen. Vul dan aan met kopieën van de hele reeks (zelfde volgorde).
 * Kopieën zijn voor schermlezers verborgen en niet met Tab bereikbaar, zodat
 * elk item maar één keer wordt voorgelezen; met muis/touch zijn ze klikbaar.
 */
function fillForLoop(el: HTMLElement) {
  const wrapper = el.querySelector<HTMLElement>(".swiper-wrapper");
  if (!wrapper) return;
  const originals = [...wrapper.children] as HTMLElement[];
  if (originals.length < 2 || originals.length >= MIN_LOOP_SLIDES) return;

  const sets = Math.ceil(MIN_LOOP_SLIDES / originals.length) - 1;
  const playVideos = !reducedMotionQuery().matches;
  for (let set = 0; set < sets; set++) {
    originals.forEach((slide) => {
      const clone = slide.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      clone.dataset.carouselClone = "";
      clone
        .querySelectorAll<HTMLElement>("a, button, iframe, video, [tabindex]")
        .forEach((node) => node.setAttribute("tabindex", "-1"));
      if (playVideos) {
        clone
          .querySelectorAll<HTMLVideoElement>("video[data-autoplay]")
          .forEach((video) => video.play().catch(() => {}));
      }
      wrapper.append(clone);
    });
  }
}

/**
 * Met <ClientRouter /> blijft de pagina bestaan tussen navigaties. Swiper en
 * de media-query-listeners ruimen we op vóór de swap, anders lekken ze.
 */
const cleanups = new Set<() => void>();
let swapListenerAdded = false;

export function onPageLeave(fn: () => void) {
  cleanups.add(fn);
  if (swapListenerAdded) return;
  swapListenerAdded = true;
  document.addEventListener("astro:before-swap", () => {
    cleanups.forEach((cleanup) => cleanup());
    cleanups.clear();
  });
}

export function initCarousels(
  rootSelector: string,
  options: SwiperOptions = {}
): Swiper[] {
  const instances: Swiper[] = [];

  document.querySelectorAll<HTMLElement>(rootSelector).forEach((root) => {
    if (root.dataset.carouselReady === "true") return;
    const el = root.querySelector<HTMLElement>(".swiper");
    if (!el) return;
    root.dataset.carouselReady = "true";

    const prevEl = root.querySelector<HTMLButtonElement>("[data-carousel-prev]");
    const nextEl = root.querySelector<HTMLButtonElement>("[data-carousel-next]");
    const toggleEl = root.querySelector<HTMLButtonElement>(
      "[data-carousel-toggle]"
    );
    const nav = root.querySelector<HTMLElement>("[data-carousel-nav]");

    const mq = reducedMotionQuery();
    const wantsAutoplay = root.dataset.autoplay === "true";
    const loop = el.querySelectorAll(".swiper-slide").length > 1;
    if (loop) fillForLoop(el);

    const swiper = new Swiper(el, {
      modules: [Navigation, A11y, Keyboard, Autoplay],
      // Oneindig doorlopen; met één slide heeft dat geen zin.
      loop,
      rewind: false,
      speed: mq.matches ? 0 : SPEED,
      watchOverflow: true,
      keyboard: { enabled: true, onlyInViewport: true },
      navigation:
        prevEl && nextEl ? { prevEl, nextEl, addIcons: false } : false,
      a11y: {
        prevSlideMessage: prevEl?.getAttribute("aria-label") || undefined,
        nextSlideMessage: nextEl?.getAttribute("aria-label") || undefined,
        firstSlideMessage: root.dataset.firstSlideMessage || undefined,
        lastSlideMessage: root.dataset.lastSlideMessage || undefined,
        slideLabelMessage: root.dataset.slideLabelMessage || undefined,
      },
      autoplay:
        wantsAutoplay && !mq.matches
          ? {
              delay: AUTOPLAY_DELAY,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }
          : false,
      ...options,
    });

    /*
     * Altijd links uitlijnen. Swiper stopt standaard aan het eind zodra de
     * laatste slide rechts in beeld is; de voorste slide staat dan half.
     * Met ruimte na de laatste slide (breedte carousel - breedte laatste
     * slide) kan die laatste slide ook links stoppen, dus elke stop lijnt
     * een slide uit met de content. Passen alle slides al, dan geen ruimte.
     */
    const alignEnd = () => {
      if (swiper.params.loop) return;
      if (swiper.params.slidesPerView !== "auto" || !swiper.slides.length) return;
      const lastIndex = swiper.slides.length - 1;
      // Exacte (fractionele) breedte uit Swiper, geen offsetWidth: anders 1px mis.
      const lastWidth = swiper.slidesSizesGrid[lastIndex] ?? 0;
      const contentEnd = (swiper.slidesGrid[lastIndex] ?? 0) + lastWidth;
      const offset = contentEnd > swiper.width ? Math.max(0, swiper.width - lastWidth) : 0;
      if (Math.abs((swiper.params.slidesOffsetAfter ?? 0) - offset) < 0.5) return;
      swiper.params.slidesOffsetAfter = offset;
      swiper.update();
    };
    alignEnd();
    swiper.on("resize", alignEnd);

    // Navigatie pas tonen als JS draait (zonder JS doen de knoppen niets).
    if (nav) nav.hidden = false;

    // Een knop die disabled wordt verliest focus; zet die op de andere knop.
    // Deze listeners draaien na die van Swiper, dus de disabled-status is al bijgewerkt.
    nextEl?.addEventListener("click", () => {
      if (nextEl.disabled) prevEl?.focus();
    });
    prevEl?.addEventListener("click", () => {
      if (prevEl.disabled) nextEl?.focus();
    });

    // Pauze/afspelen-knop voor autoplay.
    const syncToggle = () => {
      if (!toggleEl) return;
      const running = Boolean(swiper.autoplay?.running);
      toggleEl.hidden = !wantsAutoplay || mq.matches;
      toggleEl.setAttribute(
        "aria-label",
        (running ? toggleEl.dataset.labelPause : toggleEl.dataset.labelPlay) ||
          ""
      );
      toggleEl.dataset.state = running ? "playing" : "paused";
    };
    toggleEl?.addEventListener("click", () => {
      if (swiper.autoplay?.running) swiper.autoplay.stop();
      else swiper.autoplay?.start();
      syncToggle();
    });
    swiper.on("autoplayStart", syncToggle);
    swiper.on("autoplayStop", syncToggle);
    syncToggle();

    // Reageer als de gebruiker de systeeminstelling tijdens het bezoek wijzigt.
    const onMotionChange = (event: MediaQueryListEvent) => {
      swiper.params.speed = event.matches ? 0 : SPEED;
      if (event.matches) swiper.autoplay?.stop();
      syncToggle();
    };
    mq.addEventListener("change", onMotionChange);

    onPageLeave(() => {
      mq.removeEventListener("change", onMotionChange);
      swiper.destroy(true, false);
    });

    instances.push(swiper);
  });

  return instances;
}
