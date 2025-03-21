import { defineField, defineType } from 'sanity';

export const blockEpisodes = defineType({
    name: 'blockEpisodes',
    title: 'Block Episodes',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
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
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                        defineField({
                            name: 'embedUrl',
                            title: 'Embed URL',
                            type: 'url',
                            validation: (Rule) =>
                                Rule.uri({
                                    scheme: ['http', 'https'],
                                    allowRelative: false,
                                }).custom((url) => {
                                    return url.includes('youtube.com') || url.includes('vimeo.com')
                                        ? true
                                        : 'Must be a YouTube or Vimeo URL';
                                }),
                        }),
                        defineField({
                            name: 'thumbType',
                            title: 'Thumbnail Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'File Upload', value: 'file' },
                                    { title: 'External URL', value: 'url' },
                                ],
                                layout: 'radio',
                            },
                            initialValue: 'file',
                        }),
                        defineField({
                            name: 'thumbnailFile',
                            title: 'Thumbnail File',
                            type: 'file',
                            hidden: ({ parent }) => parent?.thumbType !== 'file',
                        }),
                        defineField({
                            name: 'thumbnailUrl',
                            title: 'Thumbnail URL',
                            type: 'url',
                            hidden: ({ parent }) => parent?.thumbType !== 'url',
                            validation: (Rule) =>
                                Rule.uri({
                                    scheme: ['http', 'https'],
                                    allowRelative: false,
                                }),
                        }),
                    ],
                },
            ],
        }),
    ],
});
