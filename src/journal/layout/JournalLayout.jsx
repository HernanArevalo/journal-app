import { Box } from "@mui/system"
import { Navbar } from "../components/Navbar";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display:'flex'}}>


        {/* Navbar drawerWidth */}
        <Navbar drawerWidth={ drawerWidth }/>

        {/* Sidebar drawerWidth */}



        <Box component='main'
             sx={{ flexGrow:1, p:3 }}
        >
            {/* Toolbar */}


            { children}
        </Box>



    </Box>
  )
}
