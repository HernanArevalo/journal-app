import { AppBar, IconButton, Toolbar } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar position='fixed'
            sx={{ 
                width: { sm: `calc(100% - {drawerWidth}px)`},
                ml: { sm: `${ drawerWidth }px`}
             }}
    >
        <Toolbar>
            <IconButton>
                <MenuOutlined />
            </IconButton>
        </Toolbar>
    </AppBar>

  )
}
