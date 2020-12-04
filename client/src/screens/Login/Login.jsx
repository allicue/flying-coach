import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Cloud from '../../assets/icons/cloud.png';

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
        <h3 className='login-title'>LOGIN</h3>
      
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
          <button className='login-submit-button'><p className='login-button-text'>SUBMIT</p><img className="login-cloud" alt='cloud' src={Cloud}/></button>
          <p>Don't have an account yet? <Link className='login-link' to="/register">Register here.</Link></p>
          </form>
        </div>
    </div>
  );
}

export default Login;