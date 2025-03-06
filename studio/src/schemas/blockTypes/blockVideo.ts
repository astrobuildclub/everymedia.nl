// ./schemas/blockTypes/blockVideo.ts
import {defineType, defineField} from 'sanity'
import {mediaSizes} from '../options/media'
import {PlayIcon} from '@sanity/icons'

export const blockVideo = defineType({
  name: 'blockVideo',
  type: 'object',
  icon: PlayIcon,
  title: 'Video',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'videoType',
      type: 'string',
      title: 'Video Type',
      initialValue: 'mp4', // Default is MP4
      options: {
        list: [
          {title: 'MP4', value: 'mp4'},
          {title: 'Embed', value: 'embed'},
        ],
        layout: 'radio', // Geeft een duidelijke button group
      },
    }),

    // MP4 Video URL
    defineField({
      name: 'videoUrl',
      type: 'string',
      title: 'MP4 Video URL',
      description:
        'Upload MP4 video to Vimeo and add the direct link to the mp4, read more [here](https://help.vimeo.com/hc/en-us/articles/12426150952593-Direct-links-to-video-files).',
      hidden: ({parent}) => parent?.videoType !== 'mp4',
    }),

    // Embed Options (Vimeo/Youtube)
    defineField({
      name: 'embedPlatform',
      type: 'string',
      title: 'Embed Platform',
      options: {
        list: [
          {title: 'Vimeo', value: 'vimeo'},
          {title: 'Youtube', value: 'youtube'},
        ],
        layout: 'radio',
      },
      hidden: ({parent}) => parent?.videoType !== 'embed',
    }),
    defineField({
      name: 'embedUrl',
      type: 'string',
      title: 'Embed URL',
      description:
        'Examples; https://vimeo.com/857258584 and https://youtube.com/watch?v=oYxohKbeMZw',
      hidden: ({parent}) => parent?.videoType !== 'embed',
    }),

    // Thumbnail (Custom)
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Custom Thumbnail',
      description: 'Custom video thumbnail, used for embeds and as poster image.',
    }),

    // Video Size
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: mediaSizes.map((size) => ({title: size, value: size})),
      },
    }),

    // Video Controls
    defineField({
      name: 'autoplay',
      type: 'boolean',
      title: 'Autoplay',
      initialValue: false,
      description: 'Autoplay videos play muted.',
    }),
    defineField({
      name: 'loop',
      type: 'boolean',
      title: 'Loop',
      initialValue: false,
    }),

    // Video Thumbnail Animation (MP4)
    defineField({
      name: 'videoThumbnail',
      type: 'file',
      title: 'Video Thumbnail Animation',
      description:
        'The video thumbnail will play automatically and when the user interacts, the actual video will be loaded.',
      options: {
        accept: 'video/mp4',
      },
      validation: (rule) =>
        rule.custom(async (value, {getClient}) => {
          // Remove this condition if the field is optional
          //   if (!value) {
          //     return 'File is required'
          //   }

          // If the field has a value
          if (value?.asset?._ref) {
            // Query the asset's metadata document
            const client = getClient({apiVersion: `2025-01-01`})
            // Filesize is returned in bytes
            const size = await client.fetch(`*[_id == $id][0].size`, {
              id: value.asset._ref,
            })
            // Cannot be more than 20MB
            // (adjust this number as required)
            if (size > 20000000) {
              return 'File size must be less than 20MB'
            }
          }

          return true
        }),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      size: 'size',
      media: 'thumbnail',
    },
    prepare({title, size, media}) {
      return {
        title: title || 'Untitled Video Block',
        subtitle: size ? `size: ${size}` : 'No size specified',
        media: PlayIcon,
      }
    },
  },
})
