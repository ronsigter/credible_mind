import { useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { ResourceCard } from 'components'
import { useInfiniteHits } from 'react-instantsearch-hooks-web'
import type { Article } from 'types'
import { useObserver } from 'hooks'

export const ResourceArticles: React.FC = () => {
  const { hits, results, showMore } = useInfiniteHits<Article>()
  const bottomDiv = useRef<HTMLDivElement>(null)

  useObserver(bottomDiv, showMore)

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
        <Box ref={bottomDiv} />
      </Box>
    </Box>
  )
}
