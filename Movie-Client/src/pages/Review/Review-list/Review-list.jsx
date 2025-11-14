import React from 'react'
import { useLocation } from 'react-router-dom'
import './Review-list.css'

const ReviewList = () => {
  const location = useLocation()
  const movieName = location.state?.movie || 'Movie'

  return (
    <div>
      <h2>Reviews for {movieName}</h2>
      <div className='reviews-container'>
        <p>No reviews yet. Be the first to review!</p>
      </div>
    </div>
  )
}

export default ReviewList