import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cloud from '../../assets/icons/cloud.png';
import './Register.css'

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

    <div className='login-screen'>
      <h3 className='register-title'>REGISTER</h3>
      <form className='form' onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}>
 
        <label className='form-label'>Username:</label>
        <input
          className='login-input register-input'
          type='text'
          name='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
          />

        <label className='form-label'>Email:</label>
        <input
          className='login-input register-input'
          type='text'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          />

        <label className='form-label'>Password:</label>
        <input
          className='login-input register-input'
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          />

        <button className='login-submit-button'><p className='login-button-text'>SUBMIT</p><img className="login-cloud" alt='cloud' src={Cloud}/></button>
        <p>Already have an account? <Link className='login-link' to="/login">Login here.</Link></p>
        </form>
      </div>
  )
}