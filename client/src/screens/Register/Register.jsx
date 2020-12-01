import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
      <h3>Register</h3>
      <label className='form-label'>Username:</label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
        />
      <br />
      <label className='form-label'>Email:</label>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
      <br />
      <label className='form-label'>Password:</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
      <br />
      <button>Submit</button>
      <p>Already have an account? <Link to="/login">Login here.</Link></p>
    </form>
  )
}