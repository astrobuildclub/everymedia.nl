// ./schemas/contentTypes/teamType.ts
import {defineType, defineField} from 'sanity'

export const teamType = defineType({
  name: 'team',
  type: 'document',
  title: 'Team Member',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({name: 'slug', type: 'slug', title: 'Slug', options: {source: 'name'}}),
    defineField({name: 'role', type: 'string', title: 'Role'}),
    defineField({name: 'image', type: 'image', title: 'Profile Image'}),
    defineField({name: 'email', type: 'string', title: 'Email'}),
    defineField({name: 'phone', type: 'string', title: 'Phone'}),
    defineField({name: 'bio', type: 'array', title: 'Bio', of: [{type: 'block'}]}),
  ],
})
