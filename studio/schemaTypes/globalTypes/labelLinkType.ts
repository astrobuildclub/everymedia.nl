import { defineField, defineType, } from "sanity";

export const labelLinkType = defineType({
    name: 'labelLink',
    title: 'Label Link',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
        })
    ],
    preview: {
        select: {
            title: 'label',
        },
    },
})