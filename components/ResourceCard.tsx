import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Article } from 'types'

type ResourceCardProps = {
  article: Article
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ article }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component='img'
        image={article.image}
        sx={{
          objectFit: 'scale-down',
          height: '200px',
          width: '300px',
        }}
      />
      <Box flex='1'>
        <CardContent>
          <Typography fontSize='12px'>
            {article.categories.join(' ')}
          </Typography>
          <Typography fontWeight='bold'>{article.name}</Typography>
          <Box display='flex'>
            <Typography>Date</Typography>
            <Typography ml='auto'>Source</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}
