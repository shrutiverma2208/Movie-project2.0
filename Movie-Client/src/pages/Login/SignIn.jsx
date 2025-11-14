import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  return (
    <div className='container'>
      <h2 className='page-header'>Sign In</h2>
      <div className='login-container'>
        <div className='mb-3'>
          <label>Email address</label>
          <input type='email' className='form-control' />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input type='password' className='form-control' />
        </div>
        <button className='btn btn-primary'>Sign In</button>
        <div>
          Don't have an account? <Link to='/signup'>Sign up here</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
