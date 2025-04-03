export const resolveLink = ({ slug, type, language }: { slug: string | undefined; type: string | undefined; language: string }) => {
  switch (type) {
    case "page":
      return slug?.startsWith("/") ? slug : `/${language}/${slug}`;
    case "project":
      return slug?.startsWith("/") ? slug : `/${language}/project/${slug}`;
    case "audience":
      return slug?.startsWith("/") ? slug : `/${language}/audience/${slug}`;
    default:
      return slug?.startsWith("/") ? slug : `/${language}/${slug}`;
  }
};
