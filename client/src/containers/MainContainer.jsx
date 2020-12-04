import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import AllDestinations from '../screens/AllDestinations/AllDestinations';
import DestinationDetails from '../screens/DestinationDetails/DestinationDetails';
import { getAllDestinations } from '../services/destinations';
import { postActivity, getAllActivities, putActivity, destroyActivity } from '../services/activities';
import Homepage from '../screens/Hompage/Homepage';
import AddActivity from '../screens/AddActivity/AddActivity';
import EditActivity from '../screens/EditActivity/EditActivity';

function MainContainer(props) {
  const [destinations, setDestinations] = useState([])
  const [activities, setActivities] = useState([])
  const history = useHistory()
  

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationData = await getAllDestinations()
      setDestinations(destinationData)
    }
    const fetchActivities = async () => {
      const activityData = await getAllActivities()
      setActivities(activityData)
    }
    fetchDestinations()
    fetchActivities()
  }, [])

  const handleCreate = async (activityData) => {
    const newActivity = await postActivity(activityData)
    setActivities(prevState => [...prevState, newActivity])
    history.push('/destinations')
  }

  const handleUpdate = async (id, activityData) => {
    const updatedActivity = await putActivity(id, activityData);
    setActivities(prevState => prevState.map(activity => {
      return activity.id === Number(id) ? updatedActivity : activity
    }))
    history.push('/destinations');
  }

  // const handleDelete = async (id) => {
  //   await destroyActivity(id)
  //   setActivities(prevState => prevState.filter(activity => activity.id !== id))
  // }

  // handleDelete={handleDelete} 

  return (
    <div>
      <Switch>
        <Route path='/destinations/:id'>
          <DestinationDetails activities={activities} currentUser={props.currentUser} destinations={destinations} setActivities={setActivities}></DestinationDetails>
        </Route>
        <Route path='/destinations'>
          <AllDestinations destinations={destinations}></AllDestinations>
        </Route>
        <Route path='/add-activity'>
          <AddActivity handleCreate={handleCreate} destinations={destinations}></AddActivity>
        </Route>
        <Route path='/activities/:id'>
          <EditActivity  handleUpdate={handleUpdate} activities={activities} destinations={destinations}></EditActivity>
        </Route>
        <Homepage></Homepage>
      </Switch>
    </div>
  );
}

export default MainContainer;