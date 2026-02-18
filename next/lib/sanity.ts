import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'de2u7qot',
  dataset: 'production',
  apiVersion: '2026-02-18',
  useCdn: true,
})
