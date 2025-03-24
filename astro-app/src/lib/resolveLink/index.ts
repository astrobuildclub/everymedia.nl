export const resolveLink = ({ slug, type, language }: { slug: string | undefined; type: string | undefined; language: string }) => {
  switch (type) {
    case "page":
      return slug?.startsWith("/") ? slug : `/${language}/${slug}`;
    default:
      return slug?.startsWith("/") ? slug : `/${language}/${slug}`;
  }
};
