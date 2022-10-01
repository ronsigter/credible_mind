import Main from 'app/cm-main'
import { ContentContextProvider } from 'context'
import { getNewsConfigContent } from 'helpers'
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
  const fields = await getNewsConfigContent()
  return { props: { fields } }
}

export default MainPage
