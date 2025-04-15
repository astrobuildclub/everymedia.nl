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

const previewUrl = 'http://localhost:4321'

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
      languageField: "language"
    }),
    structureTool({
      structure:deskStructure
    }),
    visionTool(),
    linkField({
      linkableSchemaTypes: linkableSchemaTypes,
    }),
    presentationTool({
      resolve: resolve,
      previewUrl:previewUrl,
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
      return prev.filter((template) => !translateLanguagesSchema.map((type) => type).includes(template.id))
    }
  },
})
