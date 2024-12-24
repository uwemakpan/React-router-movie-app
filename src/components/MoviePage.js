// src/components/MoviePage.js
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { movies } from '../data'

// component that displays a single movie based on the id in the URL
function MoviePage() {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id === parseInt(id))

  if (!movie) {
    return <div>Movie not found!</div>
  }

  return (
    <div className='movie-details'>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width={`60%`}
        height='60%'
        src={movie.trailerLink}
        title={movie.title + ' Trailer'}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <br />
      <Link to='/' className='back-to-home'>
        👈 Back to Home
      </Link>
    </div>
  )
}

export default MoviePage
