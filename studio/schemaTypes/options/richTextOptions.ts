import { defineArrayMember } from 'sanity';

export const richTextSimple = [
  defineArrayMember({
    type: 'block',
    styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'H4', value: 'h4' },
    ],
    lists: [{ title: 'Bullet', value: 'bullet' }],
    marks: {
      decorators: [
        { title: 'Strong', value: 'strong' },
        { title: 'Emphasis', value: 'em' },
      ],
      annotations: [
        {
          name: 'link',
          title: 'Link',
          type: 'link',
          options: {
            aiAssist: { exclude: true },
          },
        },
      ],
    },
  }),
];
