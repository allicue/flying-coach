import React from 'react';
import Header from '../Header/Header';

function Layout(props) {
  return (
    <div>
      <Header currentUser={props.currentUser} handleLogout={props.handleLogout}/>
      {props.children}
    </div>
  );
}

export default Layout;