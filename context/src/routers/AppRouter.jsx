import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AddMovies from '../components/form/AddMovies'
import MovieList from '../components/pages/MovieList'
import { MovieProvider } from '../components/context/MovieContext'
import Nav from '../components/Nav'


const AppRouter = () => {
  return (
    <MovieProvider>
    <BrowserRouter>
    <Nav />
    <div className='container mt-3'>
    <Route path='/' exact component={MovieList}></Route>
    <Route path='/add' component={AddMovies}></Route>
    </div>
    </BrowserRouter>
 
</MovieProvider>
 
  )
}

export default AppRouter