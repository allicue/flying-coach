import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DestinationDetails.css'
import { getOneDestination } from '../../services/destinations';
// import { getAllActivities } from '../services/activities';

function DestinationDetails(props) {
  const [destination, setDestination] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationData = await getOneDestination(id)
      console.log(destinationData)
      setDestination(destinationData)
    }
    fetchDestinations()
  }, [id])

  return (
    <div className='destination-detail-page'>

      
      <div className='hero-img' style={{ backgroundImage: `url(${destination.hero_img})` }}>
        <h2 className='country-title'>{destination.country_name}</h2>
      </div>

      <div className='country-about-container'>
        <section className='column'>
          <img className='about-img' src={destination.about_img}/>
        </section>
        <section className='column'>
          <h3 className='about-section-text'>ABOUT {destination.country_name}</h3>
          <p className='about-text'>{destination.description}</p>
        </section>
      </div>

      <div className='activities-title-container'>
        <h3>ACTIVITIES</h3>
        {
        props.currentUser ?
          <>
          <Link to='/add-activity'><h3>ADD ACTIVITY</h3></Link>
          </>
          :
          <></>
      }
      
      </div>
      
      <div className='activities-container'>

        {
          destination.activities && (          
            destination.activities.map(activity => (
              <React.Fragment key={activity.id}>
                <div className='activity-container'>
                  <div className='activity-images' style={{ backgroundImage: `url(${activity.img_url})` }}>
                  {
                    activity.user_id === props.currentUser?.id &&
                    <>
                    <div>
                      <Link to={`/activities/${activity.id}`}><button>EDIT</button></Link>
                      <button onClick={() => props.handleDelete(activity.id)}>Delete</button>
                    </div>
                    </>
                  }
                    <p className='activity-title'>{activity.name}</p>
                  </div>
                  <p className='activity-description'>{activity.description}</p>
                  <div className='activity-footer'>
                    <p>${parseInt(activity.price)}</p>
                    <a rel="noreferrer" target="_blank" href={activity.activity_url}>See more</a>
                  </div>
                </div>
              </React.Fragment>
            ))
          )
        }
      </div>
      
    </div>
  );
}

export default DestinationDetails;