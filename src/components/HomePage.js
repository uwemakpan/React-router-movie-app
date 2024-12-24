// src/components/HomePage.js
import React from 'react'
import { Link } from 'react-router-dom'
import { movies } from '../data'
import styles from '../App.css'

// Component that holds the entire movies list from the data.js file
function HomePage() {
  return (
    <div className='movie-cards'>
      {movies.map((movie) => (
        <div key={movie.id} className='movie-card'>
          <h3>{movie.title}</h3>
          <p>{movie.description.slice(0, 100)}...</p>
          <Link to={`/movie/${movie.id}`} className='viewDetailsBtn'>
            View Details &rarr;
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HomePage
