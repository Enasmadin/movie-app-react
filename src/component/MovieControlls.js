import React from 'react';
import {useMovieContext} from"../context/GloabalContext";
import  * as actions from "../context/ActionsType"

function MovieControlls({type,movie}) {
  const MovieContext= useMovieContext()



  return (
    <div className='inner-card-controls'>
        
        {
          type==="WatchList" && (
            <>
              <button className='ctrl-btn' 
               onClick={()=>MovieContext.MoviesDispatch({
                type:actions.ADD_MOVIE_TO_WATCHED,
                payload:movie
              })}>

                <i className="fa-solid fa-eye">  </i>

               </button>
               <button className='ctrl-btn' 
               onClick={()=>MovieContext.MoviesDispatch({
                type:actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload:movie.imdbID
              })}>
                <i className='fa-fw fa fa-times'></i>
               </button>
             
            </>
          )
       }
       {
          type==="watched" && (
            <>
              <button className='ctrl-btn'
               onClick={()=>MovieContext.MoviesDispatch({
                type:actions.ADD_MOVIE_TO_WATCHLIST,
                payload:movie
              })}>
                <i className="fa-solid fa-eye-slash"></i>
               </button>
               <button className='ctrl-btn'
                  onClick={()=>MovieContext.MoviesDispatch({
                    type:actions.REMOVE_MOVIE_FROM_WATCHED,
                    payload:movie.imdbID
                  })}>
                <i className='fa-fw fa fa-times'></i>
               </button>
             
            </>
          )
       } 
    </div>
  )
}

export default MovieControlls
