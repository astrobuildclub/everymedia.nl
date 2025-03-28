import { SlugIsUniqueValidator } from "sanity";

export const isUniqueWithinLocale: SlugIsUniqueValidator = async (slug, context) => {
    const { getClient } = context
    const client = getClient({ apiVersion: '2025-03-26' })

    if (!context?.document?.language) {
        // On create the locale is not yet generated, allow
        return true;
    }
    const id = context.document._id.replace(/^drafts\./, '');
    const params = {
        slug: context.defaultIsUnique(slug, context),
        locale: context?.document?.language,
        draft: `drafts.${id}`,
        published: id,
    };
    const query = `!defined(* [ _type == context.document._type
      && !(_id in [$draft, $published])
      && slug.current == $slug
      && language == $locale ][0]._id)`;
    return client.fetch(query, params);
}