import { Grid } from '@mui/material'
import { NewsCard } from 'components'
import { useHits } from 'react-instantsearch-hooks-web'
import type { Article } from 'types'

export const NewsArticles: React.FC = () => {
  const { hits } = useHits<Article>()

  return (
    <Grid container spacing={2}>
      {hits.slice(0, 3).map((article) => (
        <Grid item key={article.objectID} xs={4}>
          <NewsCard article={article} />
        </Grid>
      ))}
    </Grid>
  )
}
