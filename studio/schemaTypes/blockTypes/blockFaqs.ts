import { defineField, defineType } from 'sanity';

export const blockFaqs = defineType({
  name: 'blockFaqs',
  title: 'Block FAQs',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
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
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Block FAQs',
      }
    },
  },
});
