import { defineField, defineType } from "sanity";

export const blockTeamMembers = defineType({
    name: "blockTeamMembers",
    title: "Block Team Members",
    type: "object",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        {
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'team' }],
                options: {
                    disableNew: true,
                    filter: ({ document }) => {
                        return {
                            filter: 'language == $language',
                            params: {
                                language: document.language
                            },
                        };
                    },
                },
            }],
        },
        defineField({
            name: 'footnote',
            title: 'Footnote',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title, }) {
            return {
                title: title || 'Block Team Members',
            }
        },
    },
})

