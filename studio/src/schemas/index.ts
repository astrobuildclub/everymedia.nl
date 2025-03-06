// ./schemas/index.ts
import {type SchemaTypeDefinition} from 'sanity'

// Content types
import {pageType} from './contentTypes/pageType'
import {projectType} from './contentTypes/projectType'
import {audienceType} from './contentTypes/audienceType'
import {teamType} from './contentTypes/teamType'
import {faqType} from './contentTypes/faqType'

// Pagebuilder block types
import {blockText} from './blockTypes/blockText'
import {blockIntro} from './blockTypes/blockIntro'
import {blockImage} from './blockTypes/blockImage'
import {blockVideo} from './blockTypes/blockVideo'
import {blockTestimonial} from './blockTypes/blockTestimonial'
import {blockImageGallery} from './blockTypes/blockImageGallery'
import {blockMultiCol} from './blockTypes/blockMultiCol'
import {blockWorkSelection} from './blockTypes/blockWorkSelection'
import {blockWorkRelated} from './blockTypes/blockWorkRelated'
import {blockContact} from './blockTypes/blockContact'
import {blockCards} from './blockTypes/blockCards'
import {blockFaqs} from './blockTypes/blockFaqs'
import {blockLogos} from './blockTypes/blockLogos'
import {blockEpisodes} from './blockTypes/blockEpisodes'

// Alle schema's exporteren
export const schemas: SchemaTypeDefinition[] = [
  // Content types
  pageType,
  projectType,
  audienceType,
  teamType,
  faqType,

  // Pagebuilder block types
  blockText,
  blockIntro,
  blockImage,
  blockVideo,
  blockTestimonial,
  blockImageGallery,
  blockMultiCol,
  blockWorkSelection,
  blockWorkRelated,
  blockContact,
  blockCards,
  blockFaqs,
  blockLogos,
  blockEpisodes,
]
