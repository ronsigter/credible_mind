import { Box, CircularProgress, Typography } from '@mui/material'
import { ResourceCard } from 'components'
import { useGetArticles } from 'hooks'

export const ResourceArticles: React.FC = () => {
  const { loading, articles, indexDetails } = useGetArticles()

  if (loading)
    return (
      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap={3}
        py={10}
      >
        <CircularProgress />
        <Typography component='i' fontSize={12}>
          Loading resources...
        </Typography>
      </Box>
    )

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
