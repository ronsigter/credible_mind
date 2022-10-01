import algoliasearch from 'algoliasearch/lite'

const APPLICATION_ID = process.env.ALGOLIA_APPLICATION_ID || ''
const SEARCH_API_KEY = process.env.ALGOLIA_SEARCH_API_KEY || ''

const client = algoliasearch(APPLICATION_ID, SEARCH_API_KEY)

export default client
