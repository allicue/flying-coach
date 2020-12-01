import './App.css';
import { useState, useEffect } from 'react'; 
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'



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
    <div className="App">

    </div>
  );
}

export default App;
