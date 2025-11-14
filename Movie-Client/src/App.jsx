import { Routes, Route } from 'react-router-dom'
import './App.css'
import SignUp from './pages/Register/SignUp'
import SignIn from './pages/Login/SignIn'
import Navbar from './components/Navbar/Navbar'
import MovieList from './pages/MovieList/MovieList'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ReviewList from './pages/Review/Review-list/Review-list'

import AllReview from './pages/AllReview/AllReview';


function App() {
  const handleLogout = () => {
    // Logout logic
  }

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/review" element={<MovieList />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/review-list" element={<ReviewList />} />
        <Route path="/changeP" element={<ChangePassword />} />
        <Route path="/reviewAll" element={<AllReview/>}/>
      </Routes>
    </>
  )
}

export default App
