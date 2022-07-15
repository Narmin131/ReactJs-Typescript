import React from 'react'
import Movie from './Movie'
import { MovieContext } from '../context/MovieContext'
import { useContext } from 'react'

const MovieList = () => {
    const [movies,setMovies] = useContext(MovieContext);
  return (
    <div className='row'>
        {movies.map(data=>(
            <Movie title={data.name} earn={data.price} key={data.id} />
        ))}
    </div>
  )
}

export default MovieList