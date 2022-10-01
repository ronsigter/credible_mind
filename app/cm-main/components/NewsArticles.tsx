import { Box, Grid } from '@mui/material'
import { NewsCard } from 'components'
import { useGetArticles } from 'hooks'

export const NewsArticles: React.FC = () => {
  const { loading, articles } = useGetArticles()

  return (
    <Grid container spacing={2}>
      {articles.slice(0, 3).map((article) => (
        <Grid item key={article.objectID} xs={4}>
          <NewsCard article={article} />
        </Grid>
      ))}
    </Grid>
  )
}
