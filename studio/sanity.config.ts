import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {structure} from './src/structure'
import {schemas} from './src/schemas'
import {linkField} from 'sanity-plugin-link-field' // https://www.sanity.io/plugins/sanity-plugin-link-field
import {seoMetaFields} from 'sanity-plugin-seo' // https://www.sanity.io/plugins/seo-pane
import {schemaMarkup} from '@operationnation/sanity-plugin-schema-markup' // https://www.sanity.io/plugins/sanity-plugin-schema-markup

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'every-media',
  title: 'Every Media',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S, context) => structure(S, context),
    }),

    visionTool(),
    linkField(),
    seoMetaFields(),
    schemaMarkup(),
  ],
  schema: {
    types: schemas,
  },
})
