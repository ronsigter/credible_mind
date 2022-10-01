import { Box, Typography } from '@mui/material'
import { ResourceCard } from 'components'
import { useGetArticles } from 'hooks'

export const ResourceArticles: React.FC = () => {
  const { loading, articles, indexDetails } = useGetArticles()

  return (
    <Box px={4} width='100%'>
      <Box pb={2} borderBottom='1px solid #afd9ea' width='100%'>
        <Typography fontWeight='bold'>
          {indexDetails.totalArticles} Resources Found
        </Typography>
      </Box>
      <Box py={3} display='flex' flexDirection='column' gap={2}>
        {articles.map((article) => (
          <ResourceCard key={article.objectId} article={article} />
        ))}
      </Box>
    </Box>
  )
}
