import React from 'react';
import './Homepage.css'
import { Link } from 'react-router-dom';
import Cloud from '../../assets/icons/homepagecloud.png'
import Arrow from '../../assets/icons/arrow.png'

function Homepage(props) {
  return (
    <div className='homepage'>
      <div className='container'>
      <h1 className='homepage-title'>Flying Coach</h1>
      <h2>Economical attractions for your upcoming trip.</h2>
      <img className='homepage-cloud' src={Cloud} alt='cloud' />
        <h2>VIEW DESTINATIONS</h2>
        <div className='button-background'>
        <Link to='/destinations'><img className='homepage-arrow' src={Arrow} alt='arrow' /></Link>
        </div>
        
      
      </div>
      
    </div>
  );
}

export default Homepage;