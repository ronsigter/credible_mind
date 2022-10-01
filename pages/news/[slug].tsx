import { Box, Container, Link as MUILink } from '@mui/material'
import { EmptyState, ResourceCard } from 'components'
import { ContentContextProvider } from 'context'
import { getNewsConfigContent } from 'helpers'
import { Dashboard } from 'layout'
import AlgoliaService from 'lib/algoliaService'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import type { Article, NewsConfig } from 'types'

type NewsPageProps = {
  data: Article | null
  fields: NewsConfig
}

const News: NextPage<NewsPageProps> = ({ data, fields }) => {
  if (!data)
    return (
      <ContentContextProvider value={fields}>
        <Dashboard>
          <Container>
            <Box py={10}>
              <EmptyState message='Resource not found' />
            </Box>
          </Container>
        </Dashboard>
      </ContentContextProvider>
    )

  return (
    <ContentContextProvider value={fields}>
      <Dashboard>
        <Container>
          <Box py={5}>
            <Box>
              <Link href='/' passHref>
                <MUILink>Back</MUILink>
              </Link>
            </Box>
            <ResourceCard article={data as unknown as Article} />
          </Box>
        </Container>
      </Dashboard>
    </ContentContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const fields = await getNewsConfigContent()

  const index = AlgoliaService.initIndex('dev_news')
  const slug = query.slug as string

  let article: Article | null = null

  try {
    article = await (index as any)?.getObject(slug)
  } catch (error) {
    console.log(error)
  }

  return { props: { data: article, fields } }
}

export default News
