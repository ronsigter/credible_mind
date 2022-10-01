import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useContentContext, useResourceContext } from 'context'
import { useState } from 'react'
import { SearchBox as Search } from 'react-instantsearch-hooks-web'

export const SearchBox: React.FC = () => {
  const { searchLabel } = useContentContext()

  return (
    <Box border='1px solid #afd9ea' p={2} position='sticky' top='1rem'>
      <Typography>{searchLabel}</Typography>
      <Box display='flex' alignItems='center'>
        <Search />
      </Box>
    </Box>
  )
}
