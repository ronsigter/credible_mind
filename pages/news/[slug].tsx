import { Box, Container, Typography } from '@mui/material'
import { ResourceCard } from 'components'
import AlgoliaService from 'lib/algoliaService'
import type { GetServerSideProps, NextPage } from 'next'
import type { Article } from 'types'

type NewsPageProps = {
  data: Article | null
}

const News: NextPage<NewsPageProps> = ({ data }) => {
  if (!data)
    return (
      <Container>
        <Box py={10}>
          <Typography>Article not found</Typography>
        </Box>
      </Container>
    )

  return (
    <Container>
      <Box py={10}>
        <ResourceCard article={data as unknown as Article} />
      </Box>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const index = AlgoliaService.initIndex('credible_mind')
  const objectId = query.slug as string

  let article: Article | null = null

  try {
    article = await index.getObject(objectId)
  } catch (error) {
    console.log(error)
  }

  return { props: { data: article } }
}

export default News
