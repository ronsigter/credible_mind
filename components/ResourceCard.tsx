import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

export const ResourceCard: React.FC = () => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia component='img' height='200px' width='300px' />
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
