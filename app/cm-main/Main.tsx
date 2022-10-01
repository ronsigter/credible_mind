import { Box } from '@mui/material'
import { ResourceContextProvider } from 'context'
import { NewsArticles, SearchBox } from './components'
import { ResourceArticles } from './components/ResourceArticles'

export const Main: React.FC = () => (
  <Box py={3}>
    <NewsArticles />
    <Box display='flex' py={3}>
      <ResourceContextProvider>
        <Box>
          <SearchBox />
        </Box>
        <Box flex='1'>
          <ResourceArticles />
        </Box>
      </ResourceContextProvider>
    </Box>
  </Box>
)
