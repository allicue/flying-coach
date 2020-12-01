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
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleLogin(formData)
      }}>
        <label className='form-label'>Username:</label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
        />
        

        <br></br>

        <label className='form-label'>Password:</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          />
        

        <br></br>
        <button>Submit</button>
        <p>Don't have an account yet? <Link to="/register">Register here.</Link></p>
      </form>
    </div>
  );
}

export default Login;