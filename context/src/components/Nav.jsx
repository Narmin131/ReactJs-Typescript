import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MovieContext } from './context/MovieContext'

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Movies</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
          <li className="nav-item">
            <div className="nav-link active">Film List: <span className='text-danger'>{movies.length}</span> </div>
          </li>
   
        </ul>
        <div className="d-flex">
        <Link className="btn btn-outline-success" to="/add">Add Movies</Link>
      </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav