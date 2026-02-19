import {defineField} from 'sanity'
import {blocks} from './blocks/blocks'

const projects = defineField({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-') // remove spaces
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') // remove special characters
            .slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: blocks,
    }),
  ],
})

export {projects}
