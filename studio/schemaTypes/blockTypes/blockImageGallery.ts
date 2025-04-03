import { defineField, defineType } from "sanity";

export const blockImageGallery = defineType({
    name: "blockImageGallery",
    title: "Block Image Gallery",
    type: "object",
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

