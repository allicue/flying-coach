import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      
      <div className='login-screen'>
        <h3>LOG IN</h3>
      
        <form className='form' onSubmit={(e) => {
          e.preventDefault()
          props.handleLogin(formData)
        }}>
          <label className='form-label'>Username:</label>
          <input
            className='login-input'
            type='text'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
          />
          <label className='form-label'>Password:</label>
          <input
            className='login-input'
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            />
          <button className='submit-button'>Submit</button>
          <p>Don't have an account yet? <Link to="/register">Register here.</Link></p>
          </form>
        </div>
    </div>
  );
}

export default Login;