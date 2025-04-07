import { StructureBuilder, StructureResolverContext } from 'sanity/structure'
import { CaseIcon, CogIcon, DocumentIcon, FeedbackIcon, UserIcon, UsersIcon } from '@sanity/icons'
import { supportedLanguages } from '../schemaTypes/utils/supportedLanguage';


const docTypes = ['translation.metadata']

export const deskStructure = (S: StructureBuilder, context: StructureResolverContext) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title("Pages")
        .icon(DocumentIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              ...supportedLanguages.map((language) =>
                S.listItem()
                  .title(`${language.title.toLocaleUpperCase()}`)
                  .icon(DocumentIcon)
                  .schemaType("page")
                  .child(
                    S.documentList()
                      .schemaType("page")
                      .title(`Page (${language.title})`)
                      .filter('_type == "page" && language == $language')
                      .params({ language: language.id })
                  )
              ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Audience")
        .icon(UsersIcon)
        .child(
          S.list()
            .title('Audience')
            .items([
              ...supportedLanguages.map((language) =>
                S.listItem()
                  .title(`${language.title.toLocaleUpperCase()}`)
                  .icon(UsersIcon)
                  .schemaType("audience")
                  .child(
                    S.documentList()
                      .schemaType("audience")
                      .title(`Audience (${language.title})`)
                      .filter('_type == "audience" && language == $language')
                      .params({ language: language.id })
                  )
              ),
            ])
        ),
      S.listItem()
        .title("Frequently Asked Question")
        .icon(FeedbackIcon)
        .child(
          S.list()
            .title('Frequently Asked Question')
            .items([
              ...supportedLanguages.map((language) =>
                S.listItem()
                  .title(`${language.title.toLocaleUpperCase()}`)
                  .icon(FeedbackIcon)
                  .schemaType("faq")
                  .child(
                    S.documentList()
                      .schemaType("faq")
                      .title(`Frequently Asked Question (${language.title})`)
                      .filter('_type == "faq" && language == $language')
                      .params({ language: language.id })
                  )
              ),
            ])
        ),
      S.listItem()
        .title("Project")
        .icon(CaseIcon)
        .child(
          S.list()
            .title('Project')
            .items([
              ...supportedLanguages.map((language) =>
                S.listItem()
                  .title(`${language.title.toLocaleUpperCase()}`)
                  .icon(CaseIcon)
                  .schemaType("project")
                  .child(
                    S.documentList()
                      .schemaType("project")
                      .title(`Project (${language.title})`)
                      .filter('_type == "project" && language == $language')
                      .params({ language: language.id })
                  )
              ),
            ])
        ),
      S.listItem()
        .title("Project Tag")
        .icon(CaseIcon)
        .child(
          S.list()
            .title('Project Tag')
            .items([
              ...supportedLanguages.map((language) =>
                S.listItem()
                  .title(`${language.title.toLocaleUpperCase()}`)
                  .icon(CaseIcon)
                  .schemaType("projectTag")
                  .child(
                    S.documentList()
                      .schemaType("projectTag")
                      .title(`Project Tag (${language.title})`)
                      .filter('_type == "projectTag" && language == $language')
                      .params({ language: language.id })
                  )
              ),
            ])
        ),
      S.listItem()
        .title("Team")
        .icon(UserIcon)
        .child(
          S.list()
            .title('Team')
            .items([
              ...supportedLanguages.map((language) =>
                S.listItem()
                  .title(`${language.title.toLocaleUpperCase()}`)
                  .icon(UserIcon)
                  .schemaType("team")
                  .child(
                    S.documentList()
                      .schemaType("team")
                      .title(`Team (${language.title})`)
                      .filter('_type == "team" && language == $language')
                      .params({ language: language.id })
                  )
              ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              ...supportedLanguages.map((language) =>
                S.listItem()
                  .title(`${language.title.toLocaleUpperCase()}`)
                  .icon(CogIcon)
                  .schemaType("siteSettings")
                  .child(
                    S.documentList()
                      .schemaType("siteSettings")
                      .title(`Site Settings (${language.title})`)
                      .filter('_type == "siteSettings" && language == $language')
                      .params({ language: language.id })
                  )
              ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        return docTypes.includes(item.getId() ?? '')
      }
      ),
    ]);
}
