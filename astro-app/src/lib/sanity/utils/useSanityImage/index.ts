import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../getClient";
import urlBuilder from "@sanity/image-url";

const defaultImageBuilder = (source?: SanityImageSource) => {
  return urlBuilder(client!).fit("clip").format("webp").image(source || "");
};
export const useSanityImage = function (
  img: SanityImageSource | undefined,
) {
  try {
    const imageUrl = defaultImageBuilder(img).url();
    return { src: imageUrl };
  } catch (error) {
    // TODO: catch error
    return null;
  }
};
