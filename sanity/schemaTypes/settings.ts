import {defineField} from 'sanity'

const settings = defineField({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      description: 'Search engine optimization settings that apply site-wide.',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          description: 'Appears in browser tabs and as the default title in search engine results.',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          description:
            'A short summary of the site shown below the title in search results. Aim for 150–160 characters.',
          type: 'text',
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          description: "Relevant terms that help search engines understand the site's content.",
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Settings'}),
  },
})

export {settings}
