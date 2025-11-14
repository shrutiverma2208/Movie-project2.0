import React,{useState} from 'react'
import "./MovieList.css";

import Navbar from '../../components/Navbar/Navbar';

const MovieList = () => {





  return (
    <div>
      <h2>All Movies</h2>
      <div className="main-container">
      <div className="container">
        <h3>Avatar</h3>
        <h2>Release Date:</h2>
        <button className='btn btn-primary' >Review this Movie</button>


      </div>
       <div class="container">
        <h3>Harry potter</h3>
        <h2>Release Date:</h2>
        <button className='btn btn-primary' >Review this Movie</button>


      </div>
       <div class="container">
        <h3>Pirates</h3>
        <h2>Release Date:</h2>
        <button className='btn btn-primary' >Review this Movie</button>


      </div>
      </div>
    </div>
  )
}

export default MovieList
