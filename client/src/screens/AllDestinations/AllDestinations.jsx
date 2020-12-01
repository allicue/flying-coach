import React from 'react';

function AllDestinations(props) {
  return (
    <div>
      <h3>DESTINATIONS</h3>
      {
        props.destinations.map(destination => (
          <React.Fragment key={destination.id}>
            <div className='thumbnail-images' style={{ backgroundImage: `url(${destination.hero_img})` }}>
              <p>{destination.country_name}</p>
            </div>
          </React.Fragment>

        ))
      }
    </div>
  );
}

export default AllDestinations;