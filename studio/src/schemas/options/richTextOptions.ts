// ./schemas/options/richTextOptions.ts
import {defineArrayMember} from 'sanity'

export const richTextOptions = [
  defineArrayMember({
    type: 'block',
    marks: {
      annotations: [
        {
          name: 'link',
          title: 'Link',
          type: 'link',
        },
      ],
    },
  }),
]
// Caption versie met alleen bold & italic
export const captionRichText = [
  defineArrayMember({
    type: 'block',
    styles: [{title: 'Normal', value: 'normal'}], // Geen koppen, alleen standaard tekst
    lists: [], // Geen lijsten
    marks: {
      decorators: [
        {title: 'Bold', value: 'strong'},
        {title: 'Italic', value: 'em'},
      ],
    },
  }),
]

// Caption versie met alleen bold & italic
export const cardRichText = [
  defineArrayMember({
    type: 'block',
    styles: [{title: 'Normal', value: 'normal'}], // Geen koppen, alleen standaard tekst
    lists: [], // Geen lijsten
    marks: {
      decorators: [
        {title: 'Bold', value: 'strong'},
        {title: 'Italic', value: 'em'},
      ],
    },
  }),
]
