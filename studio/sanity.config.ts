import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {linkField} from 'sanity-plugin-link-field'
import {seoMetaFields} from 'sanity-plugin-seo'
import {schemas} from './src/schemas'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'every-media',
  title: 'Every Media',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool(), linkField(), seoMetaFields()],
  schema: {
    types: schemas,
  },
})
