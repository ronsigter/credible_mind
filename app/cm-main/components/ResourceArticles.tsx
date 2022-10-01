import { Box, Typography } from '@mui/material'
import { ResourceCard } from 'components'
import { useHits } from 'react-instantsearch-hooks-web'
import type { Article } from 'types'

export const ResourceArticles: React.FC = () => {
  const { hits, results } = useHits<Article>()

  return (
    <Box px={4} width='100%'>
      <Box pb={2} borderBottom='1px solid #afd9ea' width='100%'>
        <Typography fontWeight='bold'>
          {results?.nbHits} Resources Found
        </Typography>
      </Box>
      <Box py={3} display='flex' flexDirection='column' gap={2}>
        {hits.map((article) => (
          <ResourceCard key={article.objectID} article={article} />
        ))}
      </Box>
    </Box>
  )
}
