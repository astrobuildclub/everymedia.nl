// ./schemas/index.ts
import {type SchemaTypeDefinition} from 'sanity'

// Content types
import {pageType} from './contentTypes/pageType'
import {projectType} from './contentTypes/projectType'
import {audienceType} from './contentTypes/audienceType'
import {teamType} from './contentTypes/teamType'
import {faqType} from './contentTypes/faqType'
import {siteSettingsType} from './contentTypes/siteSettings'

// Pagebuilder block types
import {blockCards} from './blockTypes/blockCards'
import {blockContact} from './blockTypes/blockContact'
import {blockEpisodes} from './blockTypes/blockEpisodes'
import {blockFaqs} from './blockTypes/blockFaqs'
import {blockImage} from './blockTypes/blockImage'
import {blockIntro} from './blockTypes/blockIntro'
import {blockLogos} from './blockTypes/blockLogos'
import {blockMediaGallery} from './blockTypes/blockMediaGallery'
import {blockMultiCol} from './blockTypes/blockMultiCol'
import {blockTestimonial} from './blockTypes/blockTestimonial'
import {blockText} from './blockTypes/blockText'
import {blockVideo} from './blockTypes/blockVideo'
import {blockWorkRelated} from './blockTypes/blockWorkRelated'
import {blockWorkSelection} from './blockTypes/blockWorkSelection'

// Alle schema's exporteren
export const schemas: SchemaTypeDefinition[] = [
  pageType,
  audienceType,
  projectType,
  faqType,
  teamType,
  siteSettingsType,

  blockCards,
  blockContact,
  blockEpisodes,
  blockFaqs,
  blockImage,
  blockIntro,
  blockLogos,
  blockMediaGallery,
  blockMultiCol,
  blockTestimonial,
  blockText,
  blockVideo,
  blockWorkRelated,
  blockWorkSelection,
]
