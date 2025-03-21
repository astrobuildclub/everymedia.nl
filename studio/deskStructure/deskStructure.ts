import { StructureBuilder, StructureResolverContext } from 'sanity/structure'
import { CaseIcon, CogIcon, DocumentIcon, FeedbackIcon, UserIcon, UsersIcon } from '@sanity/icons'

export const deskStructure = (S: StructureBuilder, context: StructureResolverContext) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title("Pages")
        .icon(DocumentIcon)
        .child(S.documentTypeList("page").schemaType("page").title("Page")),
      S.divider(),
      S.listItem()
        .title("Audience")
        .icon(UsersIcon)
        .child(S.documentTypeList("audience").schemaType("audience").title("Audience")),
      S.listItem()
        .title("Frequently Asked Question")
        .icon(FeedbackIcon)
        .child(S.documentTypeList("faq").schemaType("faq").title("Frequently Asked Question")),
      S.listItem()
        .title("Project")
        .icon(CaseIcon)
        .child(S.documentTypeList("project").schemaType("project").title("Project")),
      S.listItem()
        .title("Team")
        .icon(UserIcon)
        .child(S.documentTypeList("team").schemaType("team").title("Team")),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(S.documentTypeList("siteSettings").schemaType("siteSettings").title("Site Settings")),
    ])
}
