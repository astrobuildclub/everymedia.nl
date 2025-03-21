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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
        },
      ],
      validation: (Rule) => Rule.min(1).error('At least one FAQ must be selected.'),
    }),
  ],
});
