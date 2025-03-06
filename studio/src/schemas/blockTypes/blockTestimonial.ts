// ./schemas/blockTypes/blockTestimonial.ts
import {defineType, defineField} from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'

export const blockTestimonial = defineType({
  name: 'blockTestimonial',
  type: 'object',
  icon: BlockquoteIcon,
  title: 'Testimonial',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'testimonial', type: 'text', title: 'Testimonial'}),
    defineField({name: 'person', type: 'string', title: 'Person'}),
    defineField({name: 'role', type: 'string', title: 'Role'}),
    defineField({name: 'image', type: 'image', title: 'Person Image'}),
  ],
  preview: {
    select: {
      title: 'title',
      person: 'person',
      media: 'image', // ✅ Dit zorgt ervoor dat de afbeelding getoond wordt in de preview
    },
    prepare({title, person, media}) {
      return {
        title: title || 'Untitled Image Block',
        subtitle: person ? `by: ${person}` : 'No person specified',
        media, // ✅ Dit voegt de afbeelding toe in de preview in Sanity Studio
      }
    },
  },
})
