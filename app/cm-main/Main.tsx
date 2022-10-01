import { Box, Container, Grid, Typography } from '@mui/material'
import { Field } from 'contentful'

type MainProps = {
  fields: Field[]
}

export const Main: React.FC<MainProps> = ({ fields }) => (
  <Container>
    <Box py={2.5} px={8}>
      <Box>Logo</Box>
    </Box>
    <Box display='flex' py={2}>
      <Box>News</Box>
      <Box ml='auto'>Drop Down</Box>
    </Box>
    <Box borderBottom='1px solid #afd9ea' borderTop='1px solid #afd9ea' pb={3}>
      <Box display='flex' justifyContent='center' py={8}>
        <Typography fontWeight='bold' fontSize={32}>
          CredibleMind in the News
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {Array.from({ length: 3 }).map((_arr, i) => (
          <Grid item key={`grid-${i}`} xs={4}>
            <Box>Article</Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Box display='flex'>
      <Box>Search Box</Box>
      <Box>Resources</Box>
    </Box>
  </Container>
)
