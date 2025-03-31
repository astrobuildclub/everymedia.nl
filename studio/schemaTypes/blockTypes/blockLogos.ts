import { defineField, defineType } from "sanity";

export const blockLogos = defineType({
    name: "blockLogos",
    title: "Block Logos",
    type: "object",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [{ type: "sanityImage" }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Block Logos',
            }
        },
    },
})

