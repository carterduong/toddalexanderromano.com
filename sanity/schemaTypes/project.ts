import {defineField} from 'sanity'
import {blocks} from './blocks/blocks'

const project = defineField({
  name: 'project',
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
  preview: {
    select: {
      title: 'title',
      image0: 'content.0.images.0.asset',
      image1: 'content.1.images.0.asset',
      image2: 'content.2.images.0.asset',
      image3: 'content.3.images.0.asset',
      image4: 'content.4.images.0.asset',
    },
    prepare({title, image0, image1, image2, image3, image4}) {
      const media = image0 || image1 || image2 || image3 || image4

      return {
        title,
        media,
      }
    },
  },
})

export {project}
