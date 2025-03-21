import { defineField, defineType, } from "sanity";
import { buttonVariant } from "../options/ctaOptions";

export const buttonType = defineType({
    name: 'cta',
    title: 'Cta',
    type: 'object',
    fields: [
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            initialValue: 'black',
            options: { list: buttonVariant, direction: 'vertical', layout: 'radio' },
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
        })
    ],
    preview: {
        select: {
            title: 'buttonText',
        },
    },
})
