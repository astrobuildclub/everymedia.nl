import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { linkField } from 'sanity-plugin-link-field'
import { schemaMarkup } from '@operationnation/sanity-plugin-schema-markup'
import { seoMetaFields } from 'sanity-plugin-seo'
import { noteField } from 'sanity-plugin-note-field';
import { linkableSchemaTypes } from './schemaTypes/contentTypes'
import { deskStructure } from './deskStructure/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Every Media',

  projectId: 'mqkdg673',
  dataset: 'production',

  plugins: [
    structureTool({
      structure:deskStructure
    }),
    visionTool(),
    linkField({
      linkableSchemaTypes: linkableSchemaTypes
    }),
    schemaMarkup(),
    seoMetaFields(),
    noteField(),
  ],

  schema: {
    types: schemaTypes,
  },
})
