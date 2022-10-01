import { Box, Typography } from '@mui/material'
import Face6Icon from '@mui/icons-material/Face6'

type EmptyStateProps = {
  message: string
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={3}
      py={10}
    >
      <Face6Icon transform='scale(3)' />
      <Typography component='i' fontSize={12}>
        No resources found
      </Typography>
    </Box>
  )
}
