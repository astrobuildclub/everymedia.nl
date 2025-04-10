import { defineType, defineField } from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const blockWorkRelated = defineType({
    name: 'blockWorkRelated',
    title: 'Related Work',
    type: 'object',
    icon: CaseIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            initialValue: 'Related Work'
        }),
        defineField({
            name: 'intro',
            title: 'Introduction',
            type: 'text',
            description: 'Short description for the related projects section',
        }),
        defineField({
            name: 'relatedProjects',
            type: 'array',
            title: 'Select Related Projects',
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
            intro: 'intro',
        },
        prepare({ title, intro }) {
            return {
                title: title || 'Block Work Related',
                subtitle: intro || 'No intro',
            }
        },
    },
})
