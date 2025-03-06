import { CogIcon } from '@sanity/icons'

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      // Singleton Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
     
      // Regular document types, excluding 'faq'
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'siteSettings' && listItem.getId() !== 'faqType'
      ),
    ]);

export default structure;