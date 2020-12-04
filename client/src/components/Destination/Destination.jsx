import React from 'react';
import { Link } from 'react-router-dom'

function Destination(props) {
  return (
    <div>
      <Link className='thumbnail-text-link' to={`/destinations/${props.id}`}>
        <React.Fragment key={props.id}>
          <div className='thumbnail-images' style={{ backgroundImage: `url(${props.hero_img})` }}>
            <p className='thumbnail-text'>{props.country_name}</p>
          </div>
        </React.Fragment>
      </Link>
    </div>
  );
}

export default Destination;