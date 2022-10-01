import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { readableDate } from 'helpers'
import type { Article } from 'types'

type NewsCardProps = {
  article: Article
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <Card>
      <CardMedia component='img' height='200' image={article.imageUrl} />
      <CardContent>
        <Typography fontSize='12px' mb={1} color='blue'>
          {article?.topics?.map(({ title }) => title).join(', ')}
        </Typography>
        <Typography color='black' fontWeight='bold'>
          {article?.name || '---'}
        </Typography>
        <Box display='flex' mt={3} gap={4}>
          <Typography fontSize='12px'>
            {readableDate(article.publicationDate)}
          </Typography>
          <Typography fontSize='12px' color='blue'>
            {article?.organization?.[0]?.fields?.name || '---'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
