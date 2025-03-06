// ./schemas/blockTypes/blockTestimonial.ts
import {defineType, defineField} from 'sanity'

export const blockTestimonial = defineType({
  name: 'blockTestimonial',
  type: 'object',
  title: 'Testimonial',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'testimonial', type: 'text', title: 'Testimonial'}),
    defineField({name: 'person', type: 'string', title: 'Person'}),
    defineField({name: 'role', type: 'string', title: 'Role'}),
    defineField({name: 'image', type: 'image', title: 'Person Image'}),
  ],
})
