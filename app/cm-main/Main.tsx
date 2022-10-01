import { Box, Container, Grid, Typography } from '@mui/material'
import { Field } from 'contentful'
import { NewsArticles, SearchBox } from './components'
import { ResourceArticles } from './components/ResourceArticles'

type MainProps = {
  fields: Field[]
}

export const Main: React.FC<MainProps> = ({ fields }) => (
  <Container>
    <Box py={2.5} px={8} borderBottom='1px solid #afd9ea'>
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
      <NewsArticles />
    </Box>
    <Box display='flex' py={3}>
      <Box>
        <SearchBox />
      </Box>
      <Box flex='1'>
        <ResourceArticles />
      </Box>
    </Box>
  </Container>
)
