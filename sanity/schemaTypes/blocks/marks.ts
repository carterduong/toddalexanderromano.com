import {EnvelopeIcon} from '@sanity/icons'
import {DocumentIcon} from '@sanity/icons'

const baseMarks = {
  decorators: [
    {
      title: 'Emphasis',
      value: 'em',
    },
  ],
  annotations: [
    {
      name: 'emailAddress',
      type: 'object',
      title: 'Email Link',
      icon: EnvelopeIcon,
      fields: [
        {
          name: 'email',
          type: 'text',
          title: 'Email',
        },
      ],
    },
    {
      name: 'link',
      type: 'object',
      title: 'External Link',
      fields: [
        {
          name: 'href',
          type: 'url',
          title: 'URL',
        },
        {
          title: 'Open in new tab',
          hidden: true,
          name: 'blank',
          description: 'Read https://css-tricks.com/use-target_blank/',
          type: 'boolean',
          initialValue: true,
        },
      ],
    },
    {
      name: 'internalLink',
      type: 'object',
      title: 'Internal Link',
      icon: DocumentIcon,
      fields: [
        {
          name: 'reference',
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
    },
  ],
}

export {baseMarks as marks}
