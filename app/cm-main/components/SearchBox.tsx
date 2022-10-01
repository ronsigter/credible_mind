import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
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
          size='small'
        />
        <Button
          onClick={handleOnSearch}
          sx={{
            backgroundColor: '#01619b',
            minWidth: 0,
            '&:hover': {
              backgroundColor: '#01619b',
            },
          }}
        >
          <SearchIcon
            sx={{
              color: 'white',
            }}
          />
        </Button>
      </Box>
    </Box>
  )
}
