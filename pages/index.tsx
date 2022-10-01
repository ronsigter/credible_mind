import Main from 'app/cm-main'
import { ContentContextProvider } from 'context'
import ContentfulClient from 'lib/contentfulService'
import type { GetServerSideProps, NextPage } from 'next'
import type { NewsConfig } from 'types'

type MainPageProps = {
  fields: NewsConfig
}

const MainPage: NextPage<MainPageProps> = ({ fields }) => {
  return (
    <ContentContextProvider value={fields}>
      <Main />
    </ContentContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const entries = (await ContentfulClient.getEntries({
    content_type: 'newsConfig',
  })) as any
  const fields = entries.items[0].fields
  const LogoURL = entries.items[0].fields?.['logo']?.fields?.file?.url || ''

  return { props: { fields: { ...fields, logo: LogoURL } } }
}

export default MainPage
