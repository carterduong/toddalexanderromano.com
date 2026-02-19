import {defineField} from 'sanity'
import {blocks} from './blocks/blocks'

const profile = defineField({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: blocks,
    }),
  ],
})

export {profile}
