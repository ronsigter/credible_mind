import { Box, Typography } from '@mui/material'
import { ResourceCard } from 'components'

export const ResourceArticles: React.FC = () => {
  return (
    <Box px={4} width='100%'>
      <Box pb={2} borderBottom='1px solid #afd9ea' width='100%'>
        <Typography fontWeight='bold'>1838 Resources Found</Typography>
      </Box>
      <Box py={3} display='flex' flexDirection='column' gap={2}>
        {Array.from({ length: 10 }).map((_arr, i) => (
          <ResourceCard key={`resource-card-${i}`} />
        ))}
      </Box>
    </Box>
  )
}
