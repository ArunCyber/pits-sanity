import { DocumentIcon } from '@sanity/icons'
import { defineField } from 'sanity'

import { validateSlug } from '../../utils/validateSlug'

export default defineField({
    name: 'form',
    title: 'Form',
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
    ],
    fields: [
        // Title
        defineField({
            name: 'firstname',
            title: 'Firstname',
            type: 'string',
        }),
        defineField({
            name: 'lastname',
            title: 'Lastname',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        // Textarea
        defineField({
            title: 'Message',
            name: 'message',
            type: 'text'
        })
        // Date
        // defineField({
        //     title: 'Release date',
        //     name: 'releaseDate',
        //     type: 'date',
        //     options: {
        //         dateFormat: 'YYYY-MM-DD',
        //         calendarTodayLabel: 'Today'
        //     }
        // }),
        // Slug
        // defineField({
        //     name: 'slug',
        //     type: 'slug',
        //     options: { source: 'title' },
        //     // @ts-ignore - TODO - fix this TS error
        //     validation: validateSlug,
        // }),
    ],
    preview: {
        select: {
            active: 'active',
            seoImage: 'seo.image',
            title: 'title',
        },
        prepare(selection) {
            const { seoImage, title } = selection

            return {
                media: seoImage,
                title,
            }
        },
    },
})
