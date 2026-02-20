import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import type {StructureResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {HomeIcon, DocumentIcon, UserIcon, EnvelopeIcon, CogIcon} from '@sanity/icons'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['home', 'profile', 'contact', 'settings'])

const structure: StructureResolver = (S) =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').documentId('home')),
      S.documentTypeListItem('project').title('Projects').icon(DocumentIcon),
      S.listItem()
        .title('Profile')
        .icon(UserIcon)
        .child(S.document().schemaType('profile').documentId('profile')),
      S.listItem()
        .title('Contact')
        .icon(EnvelopeIcon)
        .child(S.document().schemaType('contact').documentId('contact')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
    ])

export default defineConfig({
  name: 'default',
  title: 'TAR',

  projectId: 'de2u7qot',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
