import {defineType, defineField} from 'sanity'
import {VideoIcon} from '@sanity/icons'
import {mediaSizes} from '../options/mediaSizes'

export const blockVideo = defineType({
  name: 'blockVideo',
  title: 'Video',
  type: 'object',
  icon: VideoIcon,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: mediaSizes,
        layout: 'radio',
        direction: 'vertical',
      },
    }),
    defineField({
      name: 'videoType',
      type: 'string',
      title: 'Video Type',
      initialValue: 'mp4',
      options: {
        list: [
          {title: 'MP4', value: 'mp4'},
          {title: 'Embed', value: 'embed'},
        ],
        layout: 'radio',
        direction: 'vertical',
      },
    }),
    defineField({
      name: 'videoUrl',
      type: 'string',
      title: 'MP4 Video URL',
      description:
        'Example: https://videos.pexels.com/video-files/3578881/3578881-uhd_2560_1440_30fps.mp4.',
      hidden: ({parent}) => parent?.videoType !== 'mp4',
    }),
    defineField({
      name: 'autoplay',
      type: 'boolean',
      title: 'Autoplay',
      initialValue: false,
      description: 'Autoplay videos play muted.',
      hidden: ({parent}) => parent?.videoType !== 'mp4',
    }),
    defineField({
      name: 'loop',
      type: 'boolean',
      title: 'Loop',
      initialValue: false,
      hidden: ({parent}) => parent?.videoType !== 'mp4',
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
      hidden: ({parent}) => parent?.videoType !== 'embed',
    },
    {
      name: 'youtubeId',
      title: 'Youtube Id',
      type: 'string',
      description:
        'Enter only the video ID (e.g., oYxohKbeMZw). Example:https://youtube.com/watch?v=oYxohKbeMZw.',
      hidden: ({parent}) => parent?.videoType !== 'embed' || parent?.select != 'youtube',
    },
    {
      name: 'vimeoId',
      title: 'Vimeo Id',
      type: 'string',
      description:
        'Enter only the video ID (e.g., 857258584). Example: https://vimeo.com/857258584',
      hidden: ({parent}) => parent?.videoType !== 'embed' || parent?.select != 'vimeo',
    },
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'sanityImage',
      description: 'The thumbnail image is used as the poster image for the video.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      size: 'size',
    },
    prepare({title, size}) {
      return {
        title: title || 'Block Video',
        subtitle: size ? `size: ${size}` : 'No size specified',
        media: VideoIcon,
      }
    },
  },
})
