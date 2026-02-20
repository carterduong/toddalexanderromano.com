import {defineField, defineType} from 'sanity'
import {image} from './blocks/image'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [
        defineField({
          name: 'featuredProject',
          title: 'Featured Project',
          type: 'object',
          fields: [
            defineField({
              name: 'project',
              title: 'Project',
              type: 'reference',
              to: [{type: 'project'}],
            }),
            image,
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home'}),
  },
})
