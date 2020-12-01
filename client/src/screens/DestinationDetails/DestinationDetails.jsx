import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetails.css'
import { getOneDestination } from '../../services/destinations';
// import { getAllActivities } from '../services/activities';

function DestinationDetails(props) {
  const [destination, setDestination] = useState([])
  // const [activities, setActivities] = useState([])

  const { id } = useParams()
  // const params= useParams()
  // const country = props.destinations.find((r) => r.country_name === params.name)

  console.log(id)

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationData = await getOneDestination(id)
      console.log(destinationData)
      setDestination(destinationData)
    }
    // const fetchActivities = async () => {
    //   const activityData = await getAllActivities()
    //   setActivities(activityData)
    // }
    fetchDestinations()
    // fetchActivities()
  }, [id])

  return (
    <div>

      
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

      <div className='activities-container'>

        {
          destination.activities && (          
            destination.activities.map(activity => (
              <React.Fragment key={activity.id}>
                <div className='activity-images' style={{ backgroundImage: `url(${activity.img_url})` }}>
                  <p className='activity-title'>{activity.name}</p>
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