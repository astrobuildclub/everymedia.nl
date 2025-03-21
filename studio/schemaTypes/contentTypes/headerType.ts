import { defineField, defineType } from "sanity";

export const headerType = defineType({
    name: "header",
    title: "Header",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "This field is only used for CMS.",
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "sanityImage",
        }),
        defineField({
            name: "navItems",
            title: "Nav Items",
            type: 'array',
            of: [
                ({
                    name: 'navItem',
                    title: 'Nav Item',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'headline',
                            title: 'Headline',
                            type: 'string',
                        }),
                        defineField({
                            name: 'labelLinks',
                            title: 'Label Links',
                            type: 'array',
                            of: [{ type: "labelLink" }],
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'headline',
                        },
                        prepare(selection) {
                            const { title } = selection
                            return {
                                title: title || 'Nav Item',
                            }
                        },
                    },
                }),
            ],
        }),
    ],
})
