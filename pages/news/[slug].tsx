import AlgoliaService from 'lib/algoliaService'
import type { GetServerSideProps } from 'next'

const News = () => {
  return <>News page</>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const index = AlgoliaService.initIndex('credible_mind')
  const objectId = query.slug as string

  let article = {}

  try {
    article = await index.getObject(objectId)
  } catch (error) {
    console.log(error)
  }

  return { props: { data: article } }
}

export default News
