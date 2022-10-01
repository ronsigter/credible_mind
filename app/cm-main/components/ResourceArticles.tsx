import { Box, Typography } from '@mui/material'
import { EmptyState, LoadingState, ResourceCard } from 'components'
import { useResourceContext } from 'context'

export const ResourceArticles: React.FC = () => {
  const { loading, articles, indexDetails } = useResourceContext()

  if (loading) return <LoadingState message='Loading resources...' />
  if (articles.length === 0) return <EmptyState message='No resources found' />

  return (
    <Box px={4} width='100%'>
      <Box pb={2} borderBottom='1px solid #afd9ea' width='100%'>
        <Typography fontWeight='bold'>
          {indexDetails.totalArticles} Resources Found
        </Typography>
      </Box>
      <Box py={3} display='flex' flexDirection='column' gap={2}>
        {articles.map((article) => (
          <ResourceCard key={article.objectID} article={article} />
        ))}
      </Box>
    </Box>
  )
}
