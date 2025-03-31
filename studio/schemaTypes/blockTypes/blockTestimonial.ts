import { defineType, defineField } from 'sanity'
import { BlockquoteIcon } from '@sanity/icons'

export const blockTestimonial = defineType({
    name: 'blockTestimonial',
    title: 'Testimonial',
    type: 'object',
    icon: BlockquoteIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'testimonial',
            title: 'Testimonial',
            type: 'text',
        }),
        defineField({
            name: 'person',
            title: 'Person',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Person Image',
            type: 'sanityImage',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            person: 'person',
            media: 'image',
        },
        prepare({ title, person, media }) {
            return {
                title: title || 'Testimonial',
                subtitle: person ? `by: ${person}` : 'No person specified',
                media: media && media,
            }
        },
    },
})
