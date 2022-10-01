import { createClient } from 'contentful'

const SPACE = process.env.CONTENTFUL_SPACE || ''
const TOKEN = process.env.CONTENTFUL_TOKEN || ''
const HOST = process.env.CONTENTFUL_HOST || ''

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
  host: HOST,
})

export default client
