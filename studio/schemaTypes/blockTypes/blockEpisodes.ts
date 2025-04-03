import {defineField, defineType} from 'sanity'

export const blockEpisodes = defineType({
  name: 'blockEpisodes',
  title: 'Block Episodes',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'episodes',
      title: 'Episodes',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'episode',
          title: 'Episode',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            {
              name: 'select',
              title: 'Select',
              type: 'string',
              initialValue: 'vimeo',
              options: {
                list: [
                  {
                    title: 'Youtube',
                    value: 'youtube',
                  },
                  {
                    title: 'Vimeo',
                    value: 'vimeo',
                  },
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
            },
            {
              name: 'youtubeId',
              title: 'Youtube Id',
              type: 'string',
              description:
                'Enter only the video ID (e.g., oYxohKbeMZw). Example:https://youtube.com/watch?v=oYxohKbeMZw.',
              hidden: ({parent}) => parent?.select != 'youtube',
            },
            {
              name: 'vimeoId',
              title: 'Vimeo Id',
              type: 'string',
              description:
                'Enter only the video ID (e.g., 857258584). Example: https://vimeo.com/857258584',
              hidden: ({parent}) => parent?.select != 'vimeo',
            },
            defineField({
              name: 'thumbType',
              title: 'Thumbnail Type',
              type: 'string',
              options: {
                list: [
                  {title: 'File Upload', value: 'file'},
                  {title: 'External URL', value: 'url'},
                ],
                layout: 'radio',
              },
              initialValue: 'file',
            }),
            defineField({
              name: 'thumbnailFile',
              title: 'Thumbnail File',
              type: 'file',
              options: {
                accept: 'image/png, image/jpeg, image/webp',
              },
              hidden: ({parent}) => parent?.thumbType !== 'file',
            }),
            defineField({
              name: 'thumbnailUrl',
              title: 'Thumbnail URL',
              type: 'url',
              hidden: ({parent}) => parent?.thumbType !== 'url',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Block Episodes',
      }
    },
  },
})
