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
 * - Bij `prefers-reduced-motion: reduce` geen autoplay en geen slide-animatie.
 * - Autoplay heeft altijd een pauzeknop (WCAG 2.2.2).
 */

const AUTOPLAY_DELAY = 5000;
const SPEED = 400;

const reducedMotionQuery = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)");

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

    const swiper = new Swiper(el, {
      modules: [Navigation, A11y, Keyboard, Autoplay],
      loop: false,
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
