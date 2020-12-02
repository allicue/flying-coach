import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  console.log(formData)

  const { id } = useParams();

  console.log(id)
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
    <div>
      <h3>Edit an Activity</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleUpdate(id, formData)
      }}>
        <label htmlFor="name" className='form-label'>Name:</label>
        <input
          type='text'
          name="name"
          placeholder='Activity Name'
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="description" className='form-label'>Description:</label>
        <input
          type='text'
          name="description"
          placeholder='Activity Description'
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="img_url" className='form-label'>Image:</label>
        <input
          type='url'
          name="img_url"
          placeholder='Activity Image (Enter URL for Image)'
          value={formData.img_url}
          onChange={handleChange}
        />
        <label htmlFor="price" className='form-label'>Price:</label>
        <input
          type='number'
          name="price"
          placeholder='Activity Price'
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="activity_url" className='form-label'>Link to Activity:</label>
        <input
          type='url'
          name="activity_url"
          placeholder='Link to Activity Website'
          value={formData.activity_url}
          onChange={handleChange}
        />
         <select defaultValue='default' onChange={handleDropDownChange}>
          <option disabled value='default'>-- Select a Country --</option>
          {props.destinations.map(country => (
            <option value={country.id} key={country.id}>{country.country_name}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditActivity;