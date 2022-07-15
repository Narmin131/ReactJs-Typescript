import React from 'react'

const Movie = ({title,earn}) => {
  return (
          <div className="card col-12 col-sm-12 col-md-4">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{earn}$</p>
        </div>
      </div>
  )
}

export default Movie