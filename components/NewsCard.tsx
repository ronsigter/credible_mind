import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

export const NewsCard: React.FC = () => {
  return (
    <Card>
      <CardMedia component='img' height='200' />
      <CardContent>
        <Typography>Category</Typography>
        <Typography>Title</Typography>
        <Box display='flex'>
          <Typography>Date</Typography>
          <Typography ml='auto'>Source</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
