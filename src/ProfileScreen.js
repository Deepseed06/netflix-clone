import React, { useState } from 'react';
import './ProfileScreen.css';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import PlanScreen from './PlanScreen';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';



function ProfileScreen() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen_body'>
        <h2>Edit Profile</h2>
        <div className='profileScreen_info'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
          alt='profile'
          />
          <div className='profileScreen_details'>
            <h2>{user.email}</h2>

            <div className='profileScreen_plans'>
              <h3>Plans</h3>
              <PlanScreen/>
              {isLoading && <Spinner/> }
              <button 
              onClick={() => {
               setIsLoading(true) 
              auth.signOut()
              navigate('/')
              setIsLoading(false)

              }}
              className='profileScreen_signOut'>Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;