import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';

import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal/thunks';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  const classes = useStyles();

  return (
    <JournalLayout>
      
      {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }
      <div className='add-note-button'>
        <IconButton
          onClick={ onClickNewNote }
          size='large'
          disabled={ isSaving }
          sx={{
            color: 'white',
            bgcolor: 'secondary',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },

          }}
        >
          <AddOutlined  color="white" sx={{ fontSize: 30 }} />
        </IconButton>

      </div>


    </JournalLayout>
  )
}
