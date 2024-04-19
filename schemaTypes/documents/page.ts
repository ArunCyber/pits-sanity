import { DocumentIcon } from '@sanity/icons'
import { defineField } from 'sanity'

import { validateSlug } from '../../utils/validateSlug'

export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'theme',
      title: 'Theme',
    },
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'contact-page-fields',
      title: 'Contact Page Fields',
      // hidden: ({ parent }) => parent?._id == '78ffe25d-c1ea-4cae-b3a7-47b70f5e7c8a',
      // hidden: [{ _id: '78ffe25d-c1ea-4cae-b3a7-47b70f5e7c8a' }],
    },
  ],
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Date
    defineField({
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    }),
    // Slug
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      // @ts-ignore - TODO - fix this TS error
      validation: validateSlug,
    }),
    // Color theme
    defineField({
      name: 'colorTheme',
      title: 'Color theme',
      type: 'reference',
      to: [{ type: 'colorTheme' }],
      group: 'theme',
    }),
    // Show hero
    defineField({
      name: 'showHero',
      title: 'Show hero',
      type: 'boolean',
      description: 'If disabled, page title will be displayed instead',
      initialValue: false,
      group: 'editorial',
    }),
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero.page',
      hidden: ({ document }) => !document?.showHero,
      group: 'editorial',
    }),
    // Body
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
    }),
    // Contact page fields
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'contact-page-fields',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      group: 'contact-page-fields',
    }),
    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'text',
      group: 'contact-page-fields',
    }),
    defineField({
      name: 'contactMapArea',
      title: 'Map Section',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'contact-page-fields',
    }),
  ],
  preview: {
    select: {
      active: 'active',
      seoImage: 'seo.image',
      title: 'title',
    },
    prepare(selection) {
      const { seoImage, title } = selection
      // console.log(slug);
      // console.log(document);
      return {
        media: seoImage,
        title,
      }
    },
  },
})
