import React from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetails.css'

function DestinationDetails(props) {
  const params = useParams()
  const country = props.destinations.find((r) => r.country_name === params.name)
  
  return (
    <div>
      <div className='hero-img' style={{ backgroundImage: `url(${country && country.hero_img})` }}>
        <h2 className='country-title'>{country && country.country_name}</h2>
      </div>

      <div className='country-about-container'>
        <section className='column'>
          <img className='about-img' src={country && country.about_img}/>
        </section>
        <section className='column'>
          <h3 className='about-section-text'>ABOUT {country && country.country_name}</h3>
          <p className='about-text'>{country && country.description}</p>
        </section>
      </div>

      <div className='activities-container'>

      </div>
      
    </div>
  );
}

export default DestinationDetails;