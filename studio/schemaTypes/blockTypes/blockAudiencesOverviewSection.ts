

import { defineField, defineType } from "sanity";
import { richTextSimple } from "../options/richTextOptions";
import { toPlainText } from "@portabletext/react";
import {ComponentIcon} from '@sanity/icons'

export const blockAudiencesOverviewSection = defineType({
    name: "blockAudiencesOverviewSection",
    title: "Audiences Overview",
    icon:ComponentIcon,
    type: "object",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'array',
            of: richTextSimple,
        }),
        {
            name: 'audiences',
            title: 'Audiences',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'audience' }],
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
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title, }) {
            const gettitle = title ? toPlainText(title) : null
            return {
                title: gettitle || 'Block Audiences Overview Section',
            }
        },
    },
})

