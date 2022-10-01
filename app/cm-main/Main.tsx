import { Box } from '@mui/material'
import { AlgoliaSearch } from 'context'
import { NewsArticles, SearchBox } from './components'
import { ResourceArticles } from './components/ResourceArticles'

export const Main: React.FC = () => (
  <AlgoliaSearch>
    <Box py={3}>
      <NewsArticles />
      <Box display='flex' py={3}>
        <Box>
          <SearchBox />
        </Box>
        <Box flex='1'>
          <ResourceArticles />
        </Box>
      </Box>
    </Box>
  </AlgoliaSearch>
)
