import { Box, IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const SearchBox: React.FC = () => {
  return (
    <Box border='1px solid #afd9ea' p={2} position='sticky' top='1rem'>
      <Typography>Filter &amp; Refine</Typography>
      <Box display='flex' alignItems='center'>
        <TextField variant='outlined' />
        <IconButton color='primary' aria-label='search' component='label'>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
