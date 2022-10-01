import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link as MUILink,
} from '@mui/material'
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
          <Typography fontSize='12px'>
            {article?.topics?.map(({ title }) => title).join(', ')}
          </Typography>

          <Box mb={2}>
            <Link href={`/news/${article.objectID}`} passHref>
              <MUILink fontWeight='bold'>{article?.name || '---'}</MUILink>
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
          <Box display='flex'>
            <Typography>{article?.publicationDate || '---'}</Typography>
            <Typography ml='auto'>
              {article?.organization?.[0]?.fields?.name || '---'}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}
