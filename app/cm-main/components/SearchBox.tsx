import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useContentContext } from 'context'
import { useState } from 'react'
import {
  SearchBox as Search,
  useSearchBox,
} from 'react-instantsearch-hooks-web'

export const SearchBox: React.FC = () => {
  const { refine } = useSearchBox()
  const { searchLabel } = useContentContext()
  const [term, setTerm] = useState<string>('')

  const handleOnSearch = () => {
    refine(term)
  }

  return (
    <Box border='1px solid #afd9ea' p={2} position='sticky' top='1rem'>
      <Typography>{searchLabel}</Typography>
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
