import React from 'react';
import { Link } from 'react-router-dom';
import './AllDestinations.css'

function AllDestinations(props) {
  return (
    <div className='all-destinations'>
      <h3>DESTINATIONS</h3>

      <section className='destinations-container'>
        {
          props.destinations.map(destination => (
            <Link to={`/destinations/${destination.country_name}`}>
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