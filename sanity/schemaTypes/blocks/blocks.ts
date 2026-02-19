import {defineField} from 'sanity'
import {marks} from './marks'
import {image} from './image'
import {ImagesPreview} from './ImagesPreview'

const blocks = [
  defineField({
    name: 'block',
    type: 'block',
    marks,
    lists: [],
    styles: [],
  }),
  defineField({
    name: 'images',
    type: 'object',
    components: {block: ImagesPreview},
    fields: [
      defineField({
        name: 'images',
        type: 'array',
        of: [image],
        validation: (Rule) => Rule.required().min(1).max(2),
      }),
    ],
  }),
]

export {blocks}
