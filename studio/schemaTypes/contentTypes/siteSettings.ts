import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'
import { supportedLanguages } from '../utils/supportedLanguage';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  type: 'document',
  icon: CogIcon,
  title: 'Site Settings',
  groups: [
    { name: 'website', title: 'Website' },
    { name: 'analytics', title: 'Analytics' },
    { name: 'seo', title: 'SEO & HTML Schema Options' },
    { name: 'social', title: 'Social' },
    { name: 'contact', title: 'Contact' },
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
      group: "website",
    }),
    defineField({
      name: 'pageTitle',
      type: 'string',
      description: "This field is only used for CMS.",
      group: 'website',
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "header",
      validation: (Rule) => Rule.required(),
      group: "header",
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "footer",
      validation: (Rule) => Rule.required(),
      group: "footer",
    }),
    // Website Group
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'website',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      group: 'website',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3,
      description: 'A short description of your website',
      group: 'website',
    }),

    defineField({
      name: 'timezone',
      type: 'string',
      title: 'Timezone',
      group: 'website',
      options: {
        list: [
          { title: 'UTC', value: 'UTC' },
          { title: 'Europe/Amsterdam', value: 'Europe/Amsterdam' },
          { title: 'America/New York', value: 'America/New_York' },
          { title: 'America/Chicago', value: 'America/Chicago' },
          { title: 'America/Denver', value: 'America/Denver' },
          { title: 'America/Los Angeles', value: 'America/Los_Angeles' },
          { title: 'America/Sao Paulo', value: 'America/Sao_Paulo' },
          {
            title: 'America/Argentina/Buenos Aires',
            value: 'America/Argentina/Buenos_Aires',
          },
          { title: 'Europe/London', value: 'Europe/London' },
          { title: 'Europe/Berlin', value: 'Europe/Berlin' },
          { title: 'Europe/Paris', value: 'Europe/Paris' },
          { title: 'Europe/Moscow', value: 'Europe/Moscow' },
          { title: 'Asia/Tokyo', value: 'Asia/Tokyo' },
          { title: 'Asia/Shanghai', value: 'Asia/Shanghai' },
          { title: 'Asia/Dubai', value: 'Asia/Dubai' },
          { title: 'Asia/Singapore', value: 'Asia/Singapore' },
          { title: 'Asia/Kolkata', value: 'Asia/Kolkata' },
          { title: 'Australia/Sydney', value: 'Australia/Sydney' },
          { title: 'Australia/Melbourne', value: 'Australia/Melbourne' },
          { title: 'Pacific/Auckland', value: 'Pacific/Auckland' },
          { title: 'Pacific/Honolulu', value: 'Pacific/Honolulu' },
          { title: 'Africa/Johannesburg', value: 'Africa/Johannesburg' },
          { title: 'Africa/Lagos', value: 'Africa/Lagos' },
        ],
      },
    }),

    defineField({
      name: 'metaTags',
      type: 'array',
      title: 'Meta Tags',
      group: 'website',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'content', type: 'string', title: 'Content' },
          ],
        },
      ],
    }),

    // Analytics Group
    defineField({
      name: 'googleAnalytics',
      type: 'string',
      title: 'Google Analytics',
      description: 'Add your Google Analytics here (UA-12345678-1)',
      initialValue: 'UA-12345678-1', // Example Google Analytics ID
      group: 'analytics',
    }),
    defineField({
      name: 'googleTagManager',
      type: 'string',
      title: 'Google Tag Manager',
      description: 'Add your Google Tag Manager ID here (GTM-XXXXXXX)',
      initialValue: 'GTM-XXXXXXX',
      group: 'analytics',
      readOnly: true, // Disable editing
    }),
    defineField({
      name: 'facebookPixel',
      type: 'string',
      title: 'Facebook Pixel',
      initialValue: 'XXXXXXXX',
      group: 'analytics',
      readOnly: true, // Disable editing
    }),

    // SEO & HTML Schema Options Group
    // Replace with SEO plugin for default values when page has no SEO settings

    defineField({
      name: 'shareImage',
      type: 'image',
      title: 'Share Image',
      group: 'seo',
    }),

    defineField({
      name: 'defaultPageTitle',
      type: 'string',
      title: 'Default Page Title',
      description: 'The default title (max 60 characters) of your website',
      validation: (Rule) => Rule.max(60).warning('SEO-best practice: around 60 characters max'),
      group: 'seo',
    }),
    defineField({
      name: 'defaultPageDescription',
      type: 'text',
      title: 'Default Page Description',
      description: 'A short description (max 160 characters) of your website',
      validation: (Rule) => Rule.max(160).warning('SEO-best practice: around 160 characters max'),

      rows: 2,
      group: 'seo',
    }),
    defineField({
      name: 'schemaMarkup',
      type: 'schemaMarkup',
      title: 'Schema Markup',
      group: 'seo',
      description: 'Add your schema markup here.',
    }),

    // Social Group
    defineField({
      name: 'socialAccounts',
      type: 'array',
      title: 'Social Accounts',
      group: 'social',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    }),

    // Contact Group
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Email',
      group: 'contact',
    }),
    defineField({
      name: 'kvk',
      type: 'string',
      title: 'KVK',
      group: 'contact',
    }),
    defineField({
      name: 'btw',
      type: 'string',
      title: 'BTW',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      group: 'contact',
    }),
    defineField({
      name: 'termsAndConditions',
      type: 'file',
      title: 'Terms & Conditions',
      group: 'contact',
    }),
    defineField({
      name: 'privacyPolicy',
      type: 'file',
      title: 'Privacy Policy',
      group: 'contact',
    }),
  ],
  preview: {
    select: {
      title: "pageTitle",
      language: "language"
    },
    prepare({ title, language }) {
      const baseLanguage = supportedLanguages?.find((lan) => lan?.id === language)?.title || "Unknown"
      return {
        title: title || "Site Settings",
        subtitle: `${baseLanguage} Language`,
      };
    },
  },
})
