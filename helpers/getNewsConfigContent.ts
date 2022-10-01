import ContentfulClient from 'lib/contentfulService'
import type { NewsConfig } from 'types'

export const getNewsConfigContent = async (): Promise<NewsConfig> => {
  const entries = (await ContentfulClient.getEntries({
    content_type: 'newsConfig',
  })) as any
  const fields = entries.items[0].fields
  const LogoURL = entries.items[0].fields?.['logo']?.fields?.file?.url || ''

  return {
    ...fields,
    logo: LogoURL,
  }
}
