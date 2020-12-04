import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cloud from '../../assets/icons/cloud.png';

function EditActivity(props) {
  const [destinationId, setDestinationId] = useState(0)

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    price: '',
    activity_url: '',
    destination_id: destinationId,
  })

  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const activityItem = props.activities.find(activity => activity.id === Number(id));
      setFormData({
        name: activityItem.name,
        description: activityItem.description,
        img_url: activityItem.img_url,
        price: activityItem.price,
        activity_url: activityItem.activity_url,
        destination_id: activityItem.destination_id,
      })
    }
    if (props.activities.length){
      prefillForm();
    }
  }, [props.activities])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleDropDownChange = (e) => {
    const { value } = e.target;
    setDestinationId(value);
    setFormData(prevState => ({
      ...prevState,
      destination_id: value
    }))
  }

  return (
    <div className='login-screen'>
      <h3 className='login-title'>EDIT AN ACTIVITY</h3>
      <form className='add-form' onSubmit={(e) => {
        e.preventDefault()
        props.handleUpdate(id, formData)
      }}>
        <label htmlFor="name" className='form-label'>Name:</label>
        <input
          className='register-input'
          type='text'
          name="name"
          placeholder='Activity Name'
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="description" className='form-label'>Description:</label>
        <input
          className='register-input'
          type='text'
          name="description"
          placeholder='Activity Description'
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="img_url" className='form-label'>Image:</label>
        <input
          className='register-input'
          type='url'
          name="img_url"
          placeholder='Activity Image (Enter URL for Image)'
          value={formData.img_url}
          onChange={handleChange}
        />
        <label htmlFor="price" className='form-label'>Price:</label>
        <input
          className='register-input'
          type='number'
          name="price"
          placeholder='Activity Price'
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="activity_url" className='form-label'>Link to Activity:</label>
        <input
          className='register-input'
          type='url'
          name="activity_url"
          placeholder='Link to Activity Website'
          value={formData.activity_url}
          onChange={handleChange}
        />
         <select className='register-input dropdown-input' defaultValue='default' onChange={handleDropDownChange}>
          <option disabled value='default'>-- Select a Country --</option>
          {props.destinations.map(country => (
            <option value={country.id} key={country.id}>{country.country_name}</option>
          ))}
        </select>
        <button className='login-submit-button'><p className='login-button-text'>SUBMIT</p><img className="login-cloud" alt='cloud' src={Cloud}/></button>
      </form>
    </div>
  );
}

export default EditActivity;