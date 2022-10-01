import { Box, CircularProgress, Typography } from '@mui/material'

type LoadingStateProps = {
  message: string
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message }) => {
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
      <CircularProgress />
      <Typography component='i' fontSize={12}>
        {message}
      </Typography>
    </Box>
  )
}
