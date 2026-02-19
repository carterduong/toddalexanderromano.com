import {defineField} from 'sanity'

const contact = defineField({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
})

export {contact}
