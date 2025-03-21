export const resolveLink = ({ slug, type, }: { slug: string | undefined; type: string | undefined; }) => {
  switch (type) {
    case "page":
      return slug?.startsWith("/") ? slug : `/${slug}`;
    default:
      return slug?.startsWith("/") ? slug : `/${slug}`;
  }
};
