// src/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Navbar.css'; // Optional: add specific styles here

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 20px', 
        backgroundColor: '#f8f9fa', 
        borderBottom: '1px solid #ddd' 
    }}>
      <div className="nav-left" style={{ display: 'flex', gap: '20px' }}>
        <strong>Movie Reviews</strong>
        <a href="#all-movies">All Movies</a>
        <a href="#my-reviews">My Reviews</a>
        <a href="#shared-with-me">Shared With Me</a>
        <a href="#all-reviews">All Reviews</a>
      </div>
      <div className="nav-right" style={{ display: 'flex', gap: '20px' }}>
        <a href="#edit-profile">Edit Profile</a>
        <a href="#change-password">Change Password</a>
        <button 
          onClick={handleLogout} 
          style={{ 
            color: '#007bff', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: 'inherit' 
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
