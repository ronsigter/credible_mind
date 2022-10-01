import { Box, Grid } from '@mui/material'
import { NewsCard } from 'components'

export const NewsArticles: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 3 }).map((_arr, i) => (
        <Grid item key={`grid-${i}`} xs={4}>
          <NewsCard />
        </Grid>
      ))}
    </Grid>
  )
}
