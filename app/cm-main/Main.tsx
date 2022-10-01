import { Box } from '@mui/material'
import { Field } from 'contentful'
import { ResourceContextProvider } from 'context'
import { NewsArticles, SearchBox } from './components'
import { ResourceArticles } from './components/ResourceArticles'

type MainProps = {
  fields: Field[]
}

export const Main: React.FC<MainProps> = ({ fields }) => (
  <Box>
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
