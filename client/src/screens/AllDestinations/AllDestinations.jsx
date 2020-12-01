import React from 'react';
import './AllDestinations.css'

function AllDestinations(props) {
  return (
    <div className='all-destinations'>
      <h3>DESTINATIONS</h3>

      <section className='destinations-container'>
        {
          props.destinations.map(destination => (
            <React.Fragment key={destination.id}>
              <div className='thumbnail-images' style={{ backgroundImage: `url(${destination.hero_img})` }}>
                <p className='thumbnail-text'>{destination.country_name}</p>
              </div>
            </React.Fragment>
          ))
          }
        </section>
    </div>
  );
}

export default AllDestinations;