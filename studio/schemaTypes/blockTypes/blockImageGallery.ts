import { defineField, defineType } from "sanity";
import {ImagesIcon} from '@sanity/icons'

export const blockImageGallery = defineType({
    name: "blockImageGallery",
    title: "Image Gallery",
    type: "object",
    icon:ImagesIcon,
    fields: [
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'sanityImage' }],
        }),
    ],
    preview: {
        select: {
          title: 'title',
        },
        prepare({title}) {
          return {
            title: title || 'Block Image Gallery',
          }
        },
      },
})

