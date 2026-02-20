import {defineField} from 'sanity'
import {marks} from './blocks/marks'

const contact = defineField({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  preview: {
    prepare: () => ({title: 'Contact'}),
  },
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'footnote',
      title: 'Footnote',
      type: 'array',
      of: [
        defineField({
          name: 'block',
          type: 'block',
          marks,
          lists: [],
          styles: [],
        }),
      ],
    }),
  ],
})

export {contact}
