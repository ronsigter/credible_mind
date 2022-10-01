import { Box } from '@mui/material'
import { AlgoliaSearch, ResourceContextProvider } from 'context'
import { NewsArticles, SearchBox } from './components'
import { ResourceArticles } from './components/ResourceArticles'

export const Main: React.FC = () => (
  <Box py={3}>
    <NewsArticles />
    <Box display='flex' py={3}>
      <AlgoliaSearch>
        <ResourceContextProvider>
          <Box>
            <SearchBox />
          </Box>
          <Box flex='1'>
            <ResourceArticles />
          </Box>
        </ResourceContextProvider>
      </AlgoliaSearch>
    </Box>
  </Box>
)
