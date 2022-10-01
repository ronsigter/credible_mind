import { Box, Container } from '@mui/material'
import { Field } from 'contentful'

type MainProps = {
  fields: Field[]
}

export const Main: React.FC<MainProps> = ({ fields }) => (
  <Container>
    <Box>Main Page</Box>
  </Container>
)
