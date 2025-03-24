import { defineField, defineType } from "sanity";
import { richTextSimple } from "../options/richTextOptions";

export const footerType = defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        defineField({
            name: "cmsTitle",
            title: "CMS Title",
            type: "string",
            description: "This field is only used for CMS.",
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'array',
            of: richTextSimple,
        }),
        defineField({
            name: 'footerLinks',
            title: 'Footer Links',
            type: 'array',
            of: [
                ({
                    name: "footerLink",
                    title: "Footer Link",
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
