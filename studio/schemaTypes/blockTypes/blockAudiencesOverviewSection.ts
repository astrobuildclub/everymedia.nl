

import { defineField, defineType } from "sanity";
import { richTextSimple } from "../options/richTextOptions";

export const blockAudiencesOverviewSection = defineType({
    name: "blockAudiencesOverviewSection",
    title: "Block Audiences Overview Section",
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
})

