import {defineType, defineField} from 'sanity'
import {VideoIcon} from '@sanity/icons'

export const blockEpisodes = defineType({
  name: 'blockEpisodes',
  type: 'object',
  icon: VideoIcon,
  title: 'Media Carousel',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'description', type: 'text', title: 'Description'}),
    defineField({
      name: 'episodes',
      type: 'array',
      title: 'Episodes',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Title'}),
            defineField({name: 'description', type: 'text', title: 'Description'}),
            defineField({
              name: 'embedUrl',
              type: 'url',
              title: 'Video URL',
              description: 'Must be a YouTube or Vimeo URL.',
              validation: (Rule) =>
                Rule.custom((url) => {
                  if (!url) return true
                  const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com)\/.+$/
                  return pattern.test(url) || 'The URL must be a valid YouTube or Vimeo URL.'
                }),
            }),
            defineField({
              name: 'videoThumb',
              title: 'Video Thumbnail',
              type: 'object',
              fields: [
                defineField({
                  name: 'thumbType',
                  title: 'Thumbnail Type',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'File Upload', value: 'file'},
                      {title: 'URL', value: 'url'},
                    ],
                    layout: 'radio',
                  },
                }),
                defineField({
                  name: 'thumbFile',
                  title: 'Thumbnail File',
                  type: 'file',
                  description: 'Upload a file (MP4 for Vimeo) for the thumbnail',
                  hidden: ({parent}) => parent?.thumbType !== 'file',
                }),
                defineField({
                  name: 'thumbUrl',
                  title: 'Thumbnail URL',
                  type: 'url',
                  description: 'Enter a URL for the thumbnail',
                  hidden: ({parent}) => parent?.thumbType !== 'url',
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
