import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import SignUp from './pages/Register/SignUp'
import SignIn from './pages/Login/SignIn'
import ReviewList from './pages/Review/Review-list/Review-list'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/review" /> : <SignIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/review" element={isAuthenticated ? <ReviewList /> : <Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
