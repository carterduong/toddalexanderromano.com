import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import type {StructureResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['home', 'profile', 'contact', 'settings'])

const structure: StructureResolver = (S) =>
  S.list()
    .title('Site')
    .items([
      S.listItem().title('Home').child(S.document().schemaType('home').documentId('home')),
      S.documentTypeListItem('projects').title('Projects'),
      S.listItem().title('Profile').child(S.document().schemaType('profile').documentId('profile')),
      S.listItem().title('Contact').child(S.document().schemaType('contact').documentId('contact')),
      S.divider(),
      S.listItem()
        .title('Settings')
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
  },
})
