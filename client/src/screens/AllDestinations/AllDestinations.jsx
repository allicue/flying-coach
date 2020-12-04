import React from 'react';
import { Link } from 'react-router-dom';
import './AllDestinations.css'

function AllDestinations(props) {
  return (
    <div className='all-destinations'>

      <section className='hero-img destinations-hero-img'>
        <h3 className='country-title'>Destinations</h3>
      </section>
      
      <section className='destinations-container'>
        {
          props.destinations.map(destination => (
            <Link className='thumbnail-text-link' to={`/destinations/${destination.id}`}>
              <React.Fragment key={destination.id}>
                <div className='thumbnail-images' style={{ backgroundImage: `url(${destination.hero_img})` }}>
                  <p className='thumbnail-text'>{destination.country_name}</p>
                </div>
                </React.Fragment>
            </Link>
          ))
          }
        </section>
    </div>
  );
}

export default AllDestinations;