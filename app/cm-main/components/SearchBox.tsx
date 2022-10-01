import { Box, IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useResourceContext } from 'context'
import { useState } from 'react'

export const SearchBox: React.FC = () => {
  const { searchResource } = useResourceContext()
  const [term, setTerm] = useState<string>('')

  const handleOnSearch = () => {
    searchResource(term)
  }

  return (
    <Box border='1px solid #afd9ea' p={2} position='sticky' top='1rem'>
      <Typography>Filter &amp; Refine</Typography>
      <Box display='flex' alignItems='center'>
        <TextField
          variant='outlined'
          onChange={(e) => setTerm(e.target.value)}
        />
        <IconButton
          color='primary'
          aria-label='search'
          component='label'
          onClick={handleOnSearch}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
