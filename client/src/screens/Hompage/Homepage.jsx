import React from 'react';
import './Homepage.css'
import { Link } from 'react-router-dom';
import Cloud from '../../assets/icons/cloud.png'
import Arrow from '../../assets/icons/arrow.png'

function Homepage(props) {
  return (
    <div className='homepage'>
      <div className='container'>
      <h1 className='homepage-title'>Flying Coach</h1>
      <h2>Economical attractions for your upcoming trip.</h2>
      <img className='homepage-cloud' src={Cloud} alt='cloud' />
      <h2>VIEW DESTINATIONS</h2>
      <img className='homepage-arrow' src={Arrow} alt='arrow' />
      </div>
      
    </div>
  );
}

export default Homepage;