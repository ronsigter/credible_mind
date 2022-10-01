import { Box, Container, Typography } from '@mui/material'

type DashboardProps = {
  children: React.ReactElement
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <Container>
      <Box py={2.5} px={8} borderBottom='1px solid #afd9ea'>
        <Box>Logo</Box>
      </Box>
      <Box display='flex' py={2}>
        <Box>News</Box>
        <Box ml='auto'>Drop Down</Box>
      </Box>
      <Box
        borderBottom='1px solid #afd9ea'
        borderTop='1px solid #afd9ea'
        pb={3}
      >
        <Box display='flex' justifyContent='center' py={8}>
          <Typography fontWeight='bold' fontSize={32}>
            CredibleMind in the News
          </Typography>
        </Box>
      </Box>
      {children}
    </Container>
  )
}
