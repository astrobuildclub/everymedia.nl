import { defineField, defineType } from "sanity"
import {InfoOutlineIcon} from '@sanity/icons'
import {ProjectsIcon} from '@sanity/icons'

export const projectsListingSection = defineType({
  name: 'projectsListingSection',
  title: 'Projects Listing',
  type: 'object',
  icon:ProjectsIcon,
  fields: [
    defineField({
      name: 'tagLine',
      title: 'TagLine',
      type: 'string',
    }),
    {
      name: 'myCustomNote',
      title: 'Important!',
      description: 'All Projects Will be Included Automatically.',
      type: 'note',
      options: {
        icon: InfoOutlineIcon,
        tone: 'caution',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Projects Listing Section',
      }
    },
  },
})
