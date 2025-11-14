import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css'

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      onLogin()
      navigate('/review')
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Sign In</h2>
      <div className='login-container'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label>Email address</label>
            <input 
              type='email' 
              className='form-control' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-3'>
            <label>Password</label>
            <input 
              type='password' 
              className='form-control' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>Sign In</button>
        </form>
        <div>
          Don't have an account? <Link to='/signup'>Sign up here</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
