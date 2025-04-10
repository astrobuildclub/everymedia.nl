import type { CookieConsentConfig } from "vanilla-cookieconsent";
import { defaultLanguage } from "../../lib/helperFunctions";

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom left",
      equalWeightButtons: true,
      flipButtons: true,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {},
    marketing: {},
  },
  language: {
    default: defaultLanguage.id,
    autoDetect: "browser",
    translations: {
      nl: {
        consentModal: {
          title: "Hallo reiziger, het is koekjestijd!",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          acceptAllBtn: "Accepteer alles",
          acceptNecessaryBtn: "Weiger alles",
          showPreferencesBtn: "Beheer voorkeuren",
          footer:
            '<a href="#link">Privacybeleid</a>\n<a href="#link">Algemene voorwaarden</a>',
        },
        preferencesModal: {
          title: "Toestemmingsvoorkeuren Centrum",
          acceptAllBtn: "Accepteer alles",
          acceptNecessaryBtn: "Weiger alles",
          savePreferencesBtn: "Sla voorkeuren op",
          closeIconLabel: "Sluit pop-up",
          serviceCounterLabel: "Dienst|Diensten",
          sections: [
            {
              title: "Cookiegebruik",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              title:
                'Strikt noodzakelijke cookies <span class="pm__badge">Altijd ingeschakeld</span>',
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "necessary",
            },
            {
              title: "Functionele cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "functionality",
            },
            {
              title: "Analyse cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "analytics",
            },
            {
              title: "Meer informatie",
              description:
                'Voor vragen met betrekking tot mijn beleid over cookies en uw keuzes, neem dan <a class="cc__link" href="#yourdomain.com">contact met mij op</a>.',
            },
          ],
        },
      },
    },
  },
};
