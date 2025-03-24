import { defineField, defineType } from "sanity";
import { richTextSimple } from "../options/richTextOptions";
import { WarningOutlineIcon } from '@sanity/icons'

export const blockFeetSection = defineType({
    name: "blockFeetSection",
    title: "Block Feet Section",
    type: "object",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'array',
            of: richTextSimple,
        }),
        defineField({
            name: 'subTitle',
            title: 'Sub Title',
            type: 'array',
            of: richTextSimple,
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: richTextSimple,
        }),
        {
            name: "myCustomNote",
            title: "Important!",
            description: "All Projects Will be Included Automatically.",
            type: "note",
            options: {
                icon: WarningOutlineIcon,
                tone: "caution",
            },
        },
        defineField({
            name: 'connectWithUs',
            title: 'Connect With Us',
            type: 'array',
            of: [
                ({
                    name: "connectWithUs",
                    title: "Connect With Us",
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'select',
                            title: 'Select',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Label Links', value: 'labelLinks' },
                                    { title: 'Body', value: 'body' },
                                ],
                                layout: 'radio',
                            },
                            initialValue: 'labelLinks',
                        }),
                        defineField({
                            name: 'labelLinks',
                            title: 'Label Links',
                            type: 'array',
                            of: [{ type: "labelLink" }],
                            hidden: ({ parent }) => parent?.select !== 'labelLinks',
                        }),
                        defineField({
                            name: 'body',
                            title: 'Body',
                            type: 'array',
                            of: richTextSimple,
                            hidden: ({ parent }) => parent?.select !== 'body',
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                        },
                    },
                }),
            ],
        }),
    ],
})

