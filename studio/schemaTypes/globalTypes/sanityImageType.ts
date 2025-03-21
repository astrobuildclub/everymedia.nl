import { defineField, defineType, } from "sanity";
import { ImageIcon } from '@sanity/icons'


export const sanityImageType =  defineType({
    name: "sanityImage",
    title: "Sanity Image",
    type: "image",
    icon: ImageIcon,
    options: {
        hotspot: true,
    },
    fields: [
        defineField({
            name: "alt",
            title: "Alt",
            type: "string",
        }),
        defineField({
            name: "hasCaption",
            title: "Has Caption",
            type: "boolean",
            initialValue: false
        }),
        defineField({
            name: "caption",
            title: "Caption",
            type: 'text',
            hidden: ({ parent }) => !parent?.hasCaption,
        }),
    ],
    preview: {
        select: {
            imageUrl: "asset",
            alt: "alt",
            caption: "caption"
        },
        prepare(select) {
            const { imageUrl, alt, caption } = select;
            return {
                title: alt ? `Alternative text : ${alt}` : null,
                media: imageUrl && imageUrl,
                description: caption ? `Caption : ${caption}` : null
            };
        },
    },
})
