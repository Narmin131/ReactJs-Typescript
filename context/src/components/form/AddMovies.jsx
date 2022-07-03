import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const AddMovies = props => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [movies,setMovies] = useContext(MovieContext);


    const updateName =(e)=>{
        setName(e.target.value)
    }

    const updatePrice =(e)=>{
        setPrice(e.target.value);
    }

    const addMovie=(e)=>{
        e.preventDefault();
        setMovies(prevMovies=>[...prevMovies,{name:name,price:price}]);
        props.history.push('/');
    }

  return (
    <form onSubmit={addMovie}>
        <div className="mb-3">
          <label  className="form-label">Add Name</label>
          <input type="text" className="form-control" onChange={updateName} value={name} name='name' placeholder="enter name" />
        </div>
        <div className="mb-3">
          <label  className="form-label">Add Price</label>
          <input type="text" className="form-control" onChange={updatePrice} value={price} name='price' placeholder="enter price" />
        </div>
        <div className="mb-3">
          <button className=' btn btn-primary'>Add</button>
        </div>
    </form>
  )
}

export default AddMovies