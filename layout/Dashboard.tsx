import { Box, Container, Typography } from '@mui/material'
import { useContentContext } from 'context'

type DashboardProps = {
  children: React.ReactElement
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const { logo, menuLabel, ttile } = useContentContext()

  return (
    <Container>
      <Box py={2.5} px={8} borderBottom='1px solid #afd9ea'>
        <Box>
          <img src={logo} alt='logo' />
        </Box>
      </Box>
      <Box display='flex' py={2}>
        <Box>{menuLabel}</Box>
        <Box ml='auto'>Drop Down</Box>
      </Box>
      <Box borderBottom='1px solid #afd9ea' borderTop='1px solid #afd9ea'>
        <Box display='flex' justifyContent='center' py={8}>
          <Typography fontWeight='bold' fontSize={32}>
            {ttile}
          </Typography>
        </Box>
      </Box>
      {children}
    </Container>
  )
}
