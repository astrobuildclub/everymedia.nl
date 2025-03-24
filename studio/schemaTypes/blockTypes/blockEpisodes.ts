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
                        defineField({
                            name: 'embedUrl',
                            title: 'Embed URL',
                            type: 'url',
                            description: 'Examples; https://vimeo.com/857258584 and https://youtube.com/watch?v=oYxohKbeMZw',
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
                        }),
                    ],
                },
            ],
        }),
    ],
});
