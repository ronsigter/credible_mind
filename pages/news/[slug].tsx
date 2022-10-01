import { ResourceCard } from 'components'
import AlgoliaService from 'lib/algoliaService'
import type { GetServerSideProps, NextPage } from 'next'
import type { Article } from 'types'

type NewsPageProps = {
  data: {
    article: Article | undefined
  }
}

const News: NextPage<NewsPageProps> = ({ data }) => {
  if (data.article) return <>Article not found</>

  return <ResourceCard article={data.article as unknown as Article} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const index = AlgoliaService.initIndex('credible_mind')
  const objectId = query.slug as string

  let article: Article | undefined = undefined

  try {
    article = await index.getObject(objectId)
  } catch (error) {
    console.log(error)
  }

  return { props: { data: article } }
}

export default News
