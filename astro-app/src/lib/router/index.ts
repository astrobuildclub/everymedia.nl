export const routes = {
  home: () => `/`,
  project: ({ slug, language }: { slug: string; language: string }) => {
    return `/${language}/projects/${slug}`;
  },
  audience: ({ slug, language }: { slug: string; language: string }) => {
    return `/${language}/audience/${slug}`;
  },
};
