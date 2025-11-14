import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="nav-brand" style={{ textDecoration: 'none', color: 'white' }}>Movie Reviews</Link>
          <Link to="/movieList" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>All Movies</Link>
          <a href="#" className="nav-link">My Reviews</a>
          <a href="#" className="nav-link">Shared With Me</a>
          <Link to="/reviewAll" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>All Reviews</Link>
        </div>
        <div className="navbar-right">
          <a href="#" className="nav-link">Edit Profile</a>
          <Link to="/changeP" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>Change Password</Link>
          <button 
            onClick={handleLogout}
            className="nav-link nav-logout"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
