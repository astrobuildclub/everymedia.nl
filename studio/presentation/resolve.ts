import {defineLocations} from 'sanity/presentation'
import type {PresentationPluginOptions} from 'sanity/presentation'

const previewUrl = 'http://localhost:4321'

export const resolveLink = ({
  slug,
  type,
  language,
}: {
  slug: string | undefined
  type: string | undefined
  language: string
}) => {
  switch (type) {
    case 'page':
      const isRoot = slug === '/'
      if (isRoot) {
        return `/${language}/`
      } else {
        return `/${language}/${slug}`
      }
    case 'project':
      return `/${language}/project/${slug}`
    case 'audience':
      return `/${language}/audience/${slug}`
    default:
      return `/${language}/${slug}`
  }
}

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    page: defineLocations({
      select: {
        title: 'pageTitle',
        slug: 'slug.current',
        language: 'language',
        type: '_type',
      },
      resolve: (doc) => {
        return {
          locations: [
            {
              title: doc?.title || 'Untitled',
              href: `${previewUrl}${resolveLink({slug: doc.slug, language: doc.language, type: doc.type})}`,
            },
          ],
        }
      },
    }),
    audience: defineLocations({
      select: {
        title: 'pageTitle',
        slug: 'slug.current',
        language: 'language',
        type: '_type',
      },
      resolve: (doc) => {
        return {
          locations: [
            {
              title: doc?.title || 'Untitled',
              href: `${previewUrl}${resolveLink({slug: doc.slug, language: doc.language, type: doc.type})}`,
            },
          ],
        }
      },
    }),
    project: defineLocations({
      select: {
        title: 'pageTitle',
        slug: 'slug.current',
        language: 'language',
        type: '_type',
      },
      resolve: (doc) => {
        return {
          locations: [
            {
              title: doc?.title || 'Untitled',
              href: `${previewUrl}${resolveLink({slug: doc.slug, language: doc.language, type: doc.type})}`,
            },
          ],
        }
      },
    }),
  },
}
