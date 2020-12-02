import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getOneDestination } from '../../services/destinations';

function AddActivity(props) {
  const [destinationId, setDestinationId] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    price: '',
    activity_url: '',
    destination_id: destinationId,
    // user_id: {`${props.currentUser}`}

  })

  console.log(formData)
  

  // const { id } = useParams()

  // useEffect(() => {
  //   const fetchDestinations = async () => {
  //     const destinationData = await getOneDestination(id)
  //     console.log(destinationData)
  //     setDestination(destinationData)
  //   }
  //   fetchDestinations()
  // }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleDropDownChange = (e) => {
    const { value } = e.target;
    setDestinationId(value);
  }

  return (
    <div>
      <h3>Add an Activity</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleCreate(formData)
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

export default AddActivity;