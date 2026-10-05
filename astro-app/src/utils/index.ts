export * from "./sanity"

// Explicitly export commonly used types for better TypeScript resolution
export type {
  HeaderType,
  FooterType,
  NavItemType,
  LayoutPropsType,
} from "./sanity/types/layoutType"

export type {
  HeroVariantType,
  EpisodeType,
  DefaultSeoPropsType,
} from "./sanity/types/common"

export type {
  BlockContactType,
  HeroViewType,
  PagebuilderType,
  BlockAudiencesOverviewSectionType,
  BlockCardsType,
  CardType,
  BlockEpisodesType,
  BlockFaqsType,
  BlockFeetSectionType,
  ConnectWithUsType,
  BlockImageType,
  BlockImageGalleryType,
  BlockIntroType,
  BlockLogosType,
  BlockMediaGalleryType,
  BlockMultiColType,
  BlockRichTextType,
  BlockTeamMembersType,
  BlockTestimonialType,
  BlockTextType,
  BlockTextMediaType,
  BlockVideoType,
  BlockWorkRelatedType,
  BlockWorkSelectionType,
  FeaturedProjectsType,
  ProjectsListingSectionType,
} from "./sanity/types/pagebuilderType"

export type {
  LabelLinkType,
  ButtonType,
  ButtonVariantType,
  SanityImageType,
  RichTextSimpleType,
} from "./sanity/types/global"

export type {
  ProjectType,
} from "./sanity/types/projectType"

export type {
  PageType,
} from "./sanity/types/pageType"

export type {
  AudienceType,
} from "./sanity/types/audienceType"

export type {
  SeoType,
} from "./sanity/types/seoType"

export type {
  FaqType,
} from "./sanity/types/faqType"