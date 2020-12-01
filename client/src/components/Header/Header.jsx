import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Cloud from '../../assets/icons/cloud.png'

function Header(props) {
  const { currentUser } = props

  return (
    <div className='header'>
      <div className='logo-section'>
      <Link id='header-logo' to="/destinations">Flying Coach</Link>
      </div>
      <div className='user-login-section'>
      {
        currentUser ?
          <>
            <img className='cloud-img' alt="cloud" src={Cloud}/>
            <p>{currentUser.username}</p>
            <p>|</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <>
            <img className='cloud-img' alt="cloud" src={Cloud}/>
            <Link to="/login">LOGIN</Link>
            <p>|</p>
            <Link to="/register">REGISTER</Link>
          </>
      }
      </div>

    </div>
  );
}

export default Header;