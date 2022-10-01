import Main from 'app/cm-main'
import ContentfulClient from 'lib/contentfulService'
import type { GetServerSideProps, NextPage } from 'next'
import type { Field } from 'contentful'

type MainPageProps = {
  data: {
    fields: Field[]
  }
}

const MainPage: NextPage<MainPageProps> = ({ data }) => {
  return <Main fields={data.fields || []} />
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const data = await ContentfulClient.getContentType('newsConfig')
  return { props: { data } }
}

export default MainPage
