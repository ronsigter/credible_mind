import { Box, IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const SearchBox: React.FC = () => {
  return (
    <Box>
      <Typography>Filter &amp; Refine</Typography>
      <Box>
        <TextField variant='outlined' />
        <IconButton color='primary' aria-label='search' component='label'>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
