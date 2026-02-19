import {defineField} from 'sanity'

const image = defineField({
  name: 'image',
  type: 'image',
  preview: {
    select: {
      media: 'asset',
    },
  },
  fields: [
    defineField({
      name: 'mobileImage',
      type: 'image',
      title: 'Mobile Image',
    }),
  ],
})

export {image}
