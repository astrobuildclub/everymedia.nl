import { defineType, defineField } from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const blockWorkSelection = defineType({
    name: 'blockWorkSelection',
    title: 'Block Work Selection',
    type: 'object',
    icon: CaseIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            initialValue: 'Selected Projects'
        }),
        defineField({
            name: 'intro',
            type: 'text',
            title: 'Introduction',
            description: 'Short description for the project selection section',
        }),
        defineField({
            name: 'selectedProjects',
            type: 'array',
            title: 'Select Projects',
            of: [{
                type: 'reference',
                to: [{ type: 'project' }],
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
        }),
        defineField({
            name: 'cta',
            title: 'Call to Action',
            type: 'cta',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Block Work Selection',
            }
        },
    },
})
