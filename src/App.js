import React, {useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';
 
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{

      if(userAuth){
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));

      }
      else{
        dispatch(logout());
      }
    })
      return unsubscribe
  },[dispatch]);

 
  return (
    <div className="app">      
        <Routes>

          
          
        {!user ? <Route  path='/' element={<LoginScreen/>}/> :
      
      <Route  path='/' element={<HomeScreen/>}/> }
      <Route  path='/profile' element={<ProfileScreen/>}/> 

        </Routes> 
    </div>
  );
}

export default App;
