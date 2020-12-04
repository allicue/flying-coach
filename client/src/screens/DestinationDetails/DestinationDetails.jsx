import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DestinationDetails.css'
import { getOneDestination } from '../../services/destinations';
import AddIcon from '../../assets/icons/add.png';
import Pencil from '../../assets/icons/pencil.png';
import Trash from '../../assets/icons/trash.png'
import { destroyActivity } from '../../services/activities';


function DestinationDetails(props) {
  const [destination, setDestination] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const { id } = useParams()

  const handleDelete = async (id) => {
  await destroyActivity(id)
    props.setActivities(prevState => prevState.filter(activity => activity.id !== id))
    setIsLoaded(!isLoaded)
  }

  useEffect(() => {
    const fetchDestinations = async () => {
    const destinationData = await getOneDestination(id)
    setDestination(destinationData)
  }
  fetchDestinations()
  }, [id, isLoaded])

  return (
    <div className='destination-detail-page'>

      <div className='hero-img' style={{ backgroundImage: `url(${destination.hero_img})` }}>
        <h2 className='country-title'>{destination.country_name}</h2>
      </div>

      <div className='country-about-container'>
        <section className='column column-a'>
          <img className='about-img' alt='country' src={destination.about_img}/>
        </section>
        <section className='column column-b'>
          <h3 className='about-section-text'>ABOUT {destination.country_name}</h3>
          <p className='about-text'>{destination.description}</p>
        </section>
      </div>

      <div className='complete-activities-container'>
      <div>
      <div className='activities-title-container'>
        <h3 className='activities-section-title'>ACTIVITIES</h3>
        {
        props.currentUser ?
          <>
              <Link className='add-activity-link' to='/add-activity'><img className='add-icon' alt='plus-sign' src={AddIcon}/><h3>ADD ACTIVITY</h3></Link>
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
                      <div className='activity-image-layer'>
                      {
                        activity.user_id === props.currentUser?.id &&
                        <>
                        <div className='button-container'>
                          <Link to={`/activities/${activity.id}`}><button className='button-crud'><img src={Pencil} alt='pencil' className='button-icon'/></button></Link>
                          <button className='button-crud' onClick={() => handleDelete(activity.id)}><img src={Trash} alt='trash' className='button-icon'/></button>
                        </div>
                        </>
                      }
                        <p className='activity-title'>{activity.name}</p>
                      </div>
                    </div>
                    <p className='activity-description'>{activity.description}</p>
                    <div className='activity-footer'>
                      <p className='price'>${parseInt(activity.price)}</p>
                      <a className='activity-link' rel="noreferrer" target="_blank" href={activity.activity_url}>See more >></a>
                    </div>
                  </div>
                </React.Fragment>
              ))
            )
          }
        </div>
        </div>
        </div>
    </div>
  );
}

export default DestinationDetails;