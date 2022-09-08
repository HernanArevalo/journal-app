import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, } from 'react-router-dom'
import { FirebaseAuth } from '../firebase/config'

import { login, logout } from '../store/auth'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

import { JournalPage } from '../journal/pages/JournalPage'
import { CheckingAuth } from '../ui'


export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch()

  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async( user ) =>{
      
      if ( !user )return dispatch( logout() );
      
      const { uid, displayName, photoURL, email } = user;
      dispatch( login({ uid, displayName, photoURL, email }) );

    });
  
  }, []);
  
  if (status === 'checking'){
    return <CheckingAuth />
  }

  return (
    <Routes>
        {
          (status === 'authenticated')
          ? <Route path="/*" element={ <JournalPage /> }/>
          : <Route path="/auth/*" element={ <AuthRoutes /> }/>

        }

        <Route path='/*' element={ <Navigate to='/auth/login' /> } />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> }/> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalPage /> }/> */}

    </Routes>
  )
}
