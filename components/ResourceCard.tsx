import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link as MUILink,
} from '@mui/material'
import { readableDate } from 'helpers'
import Link from 'next/link'
import { Article } from 'types'

type ResourceCardProps = {
  article: Article
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ article }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component='img'
        image={article.imageUrl}
        sx={{
          objectFit: 'scale-down',
          height: '200px',
          width: '300px',
        }}
      />
      <Box flex='1'>
        <CardContent>
          <Box></Box>
          <Typography fontSize='12px' mb={1} color='blue'>
            {article?.topics?.map(({ title }) => title).join(', ')}
          </Typography>
          <Box mb={2}>
            <Link href={`/news/${article.objectID}`} passHref>
              <MUILink
                fontWeight='bold'
                underline='none'
                color='black'
                fontSize='1.5rem'
              >
                {article?.name || '---'}
              </MUILink>
            </Link>
          </Box>
          <Box mb={2}>
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {article?.description || '---'}
            </Typography>
          </Box>
          <Box display='flex' gap={4}>
            <Typography fontSize='12px'>
              {readableDate(article?.publicationDate)}
            </Typography>
            <Typography fontSize='12px' color='blue'>
              {article?.organization?.[0]?.fields?.name || '---'}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}
