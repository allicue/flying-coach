import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const { currentUser } = props

  return (
    <div>
      <h1>Flying Coach</h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <>
            <Link to="/login">LOGIN</Link>
            <p>|</p>
            <Link to="/register">REGISTER</Link>
          </>
      }
    </div>
  );
}

export default Header;