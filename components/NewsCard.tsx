import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link as MUILink,
  Typography,
} from '@mui/material'
import { readableDate } from 'helpers'
import Link from 'next/link'
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
        <Link href={`/news/${article.objectID}`} passHref>
          <MUILink fontWeight='bold' underline='none' color='black'>
            {article?.name || '---'}
          </MUILink>
        </Link>
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
