import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import AllDestinations from '../screens/AllDestinations/AllDestinations';
// import FoodCreate from '../screens/FoodCreate';
// import FoodEdit from '../screens/FoodEdit';
// import Foods from '../screens/Foods';
import { getAllDestinations } from '../services/destinations';
import { postActivity, getAllActivities, getOneActivity, putActivity, destroyActivity } from '../services/activities';

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
    history.push('/activities')
  }

  const handleUpdate = async (id, activityData) => {
    const updatedActivity = await putActivity(id, activityData);
    setActivities(prevState => prevState.map(activity => {
      return activity.id === Number(id) ? updatedActivity : activity
    }))
    history.push('/activities');
  }

  const handleDelete = async (id) => {
    await destroyActivity(id)
    setActivities(prevState => prevState.filter(activity => activity.id !== id))
  }

  return (
    <div>
      <Switch>
        <Route path='/destinations'>
          <AllDestinations destinations={destinations}></AllDestinations>
        </Route>
        {/* <Route path='/foods/:id/edit'>
          <FoodEdit handleUpdate={handleUpdate} foods={foods}></FoodEdit>
        </Route>
        <Route path='/foods/new'>
          <FoodCreate handleCreate={handleCreate}></FoodCreate>
        </Route>
        <Route path='/foods'>
          <Foods handleDelete={handleDelete} foods={foods} currentUser={props.currentUser}></Foods>
        </Route> */}
      </Switch>
    </div>
  );
}

export default MainContainer;