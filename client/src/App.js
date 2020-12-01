import './App.css';
import React, { useState, useEffect } from 'react'; 
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Layout from './components/Layout/Layout';
import Login from './screens/Login/Login'
import MainContainer from './containers/MainContainer'
import Register from './screens/Register/Register'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])
  
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }

  return (
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin}></Login>
          </Route>  
        
          <Route path='/register'>
            <Register handleRegister={handleRegister}></Register>
          </Route>
        
          <Route path='/'>
            <MainContainer currentUser={currentUser}></MainContainer>
          </Route>
        
        </Switch>
      </Layout>
  );
}

export default App;

