import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {documentInternationalization} from '@sanity/document-internationalization'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {linkField} from 'sanity-plugin-link-field'
import {schemaMarkup} from '@operationnation/sanity-plugin-schema-markup'
import {seoMetaFields} from 'sanity-plugin-seo'
import {noteField} from 'sanity-plugin-note-field'
import {linkableSchemaTypes, translateLanguagesSchema} from './schemaTypes/contentTypes'
import {deskStructure} from './deskStructure/deskStructure'
import {supportedLanguages} from './schemaTypes/utils/supportedLanguage'
import {assist} from '@sanity/assist'
import {presentationTool} from 'sanity/presentation'
import {resolve} from './presentation/resolve'

// De Studio draait los van de site (every-media.sanity.studio), dus de site-URL
// komt uit de env, met de Netlify-URL als standaard voor `sanity deploy`.
const previewOrigin =
  process.env.SANITY_STUDIO_PREVIEW_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://everymedia.netlify.app'
    : 'http://localhost:4321')

export default defineConfig({
  name: 'default',
  title: 'Every Media',

  projectId: 'mqkdg673',
  dataset: 'production',

  plugins: [
    documentInternationalization({
      supportedLanguages: supportedLanguages,
      schemaTypes: translateLanguagesSchema,
      weakReferences: false,
      languageField: 'language',
    }),
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
    linkField({
      linkableSchemaTypes: linkableSchemaTypes,
    }),
    presentationTool({
      resolve: resolve,
      // Visual Editing volgens ~/Code/_standards/SANITY.md §3: de site zet via
      // /api/preview een ondertekende cookie (alleen met geldig secret).
      previewUrl: {
        initial: previewOrigin,
        previewMode: {
          enable: '/api/preview',
          disable: '/api/preview/disable',
        },
      },
    }),
    schemaMarkup(),
    seoMetaFields(),
    noteField(),
    assist({
      translate: {
        document: {
          documentTypes: translateLanguagesSchema,
          languageField: 'language',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => {
      return prev.filter(
        (template) => !translateLanguagesSchema.map((type) => type).includes(template.id),
      )
    },
  },
})
