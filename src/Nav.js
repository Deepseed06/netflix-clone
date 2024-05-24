import React, { useEffect} from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Nav.css'

function Nav({ShowBtn = false,  handleChange}) {
    const [show, handleShow] = useState(false)
    const navigate = useNavigate();
    const handleNavigateToProfile = () =>{
        navigate('/profile')
    }
    const handleNavigateToHome = () =>{
        navigate('/')
    }
    
    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',transitionNavBar);
        return () => window.removeEventListener('scroll',transitionNavBar)
    },[])
  return (
    <div className={`nav ${show &&'nav_black'}`}>
        <div className='nav_contents'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='netflix logo'
        onClick={handleNavigateToHome}
        className='nav_logo'
    
        /> {

        ShowBtn ? <button className='loginScreen_button' onClick={ handleChange}>Sign In</button>:  
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
        alt='avatar'
        onClick={handleNavigateToProfile}
        className='nav_avatar'/>

        
    }
    </div>
   
    </div>
  )
}

export default Nav;