// ./src/sanity/lib/resolve.ts

import {defineLocations} from 'sanity/presentation'
import type {PresentationPluginOptions} from 'sanity/presentation'

const previewUrl = import.meta.env.PUBLIC_FRONTEND_URL || 'http://localhost:4321'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    page: defineLocations({
      select: {
        title: 'pageTitle',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `${previewUrl}/nl/${doc?.slug}`,
          },
        ],
      }),
    }),
  },
}
