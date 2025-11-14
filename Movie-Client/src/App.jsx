import { Routes, Route } from 'react-router-dom'
import './App.css'
import SignUp from './pages/Register/SignUp'
import SignIn from './pages/Login/SignIn'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App
