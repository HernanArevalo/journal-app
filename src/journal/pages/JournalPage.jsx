import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Velit aute est ullamco fugiat occaecat quis non cillum aute sit irure. Aute tempor ullamco nulla adipisicing minim tempor nisi. Veniam ea anim esse labore adipisicing reprehenderit nulla aliqua labore. Esse anim ipsum culpa do incididunt esse cillum in labore do commodo ex. Lorem enim nulla mollit laboris deserunt eu mollit.</Typography> */}
      
      <NothingSelectedView />
      {/* <NoteView /> */}


      <IconButton
        size='large'
        sx={{ 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50

         }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
