import React, { useEffect, useState } from 'react';
import './Add.css'
import axios from 'axios';
import ResultCard from '../component/ResultCard'

function Add() {
    const [search, setsearch] = useState();
    const [movies,setmovies] = useState([]);

    const handelSearch = (e)=>{
        setsearch(e.target.value) 
    }
    useEffect(()=>{
        axios.get(` https://www.omdbapi.com/?s=${search}&apikey=66609daf`).then((response)=>{
           if(response.data.Search)
           {
              setmovies(response.data.Search)
              // console.log(response.data.Search);
           }
        }).catch((error)=> console.log(error))  
    },[search])
  return (
    <div className='add-page'>
       <div className='container'>
        <div className='add-content'>
            <div className='input-container'>
                <input  type="text" placeholder='Search for a movie ' onChange={handelSearch}/>
            </div>
            {
                 movies.length > 0 && (
                    <ul className='results'> 
                       {
                          movies.map((movie)=>(<li key={movie.imdbID}> { <ResultCard movie={movie}/> } </li>))
                       }
                    </ul>  
                )
            }
           

        </div>
      </div> 
    </div>
  )
}

export default Add
