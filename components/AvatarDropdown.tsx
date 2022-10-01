import { Avatar, Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'

export const AvatartDropdown: React.FC = () => {
  const handleLogout = () => {
    console.log('logout')
    handleClose()
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        id='avatar-menu'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Box display='flex' gap={1} alignItems='center'>
          <Avatar
            alt='John Doe'
            src='/static/images/avatar/1.jpg'
            sx={{ width: 24, height: 24 }}
          />
          <Typography>John Doe</Typography>
        </Box>
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'avatar-menu',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}
