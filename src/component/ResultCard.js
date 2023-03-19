
import React from 'react';
import { useMovieContext } from '../context/GloabalContext';
import './ResultCard.css';
import * as actions from "../context/ActionsType";

function ResultCard({movie}) {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchList.find((o) =>
        o.imdbID===movie.imdbID
  )
  const storedMovieWatched = MovieContext.watchList.find((o) =>
        o.imdbID===movie.imdbID
  )
  const WatchListDisabled= storedMovie ? true : storedMovieWatched ? true :false;
  const watchchedDisabled = storedMovieWatched ? true :false;
  
  return (
    <div className='result-card'>
      <div className='poster-wraper' >
         {
           movie.Poster ? (<img src= {movie.Poster} alt={movie.Title}/>) : (<div className='filter-poster'> </div>)
         }
      </div>
      <div className='info'>
          <div className='heading'>
            <h3 className='title'> {movie.Title} </h3>
            { movie.Year ? (<h4 className='relase-date'> { movie.Year} </h4>) : "-"}
          </div>
         <div className='controols'>
            <button className='btn'  onClick={()=>MovieContext.MoviesDispatch({type:actions.ADD_MOVIE_TO_WATCHLIST,payload:movie} ,console.log(MovieContext.watchList))} disabled={WatchListDisabled}> add to wachlist  </button>
            <button className='btn'  onClick={()=>MovieContext.MoviesDispatch({type:actions.ADD_MOVIE_TO_WATCHED,payload:movie} ,console.log(MovieContext.watched))} disabled={watchchedDisabled}> add to whached </button>

         </div>
      </div>
    </div>
  )
}

export default ResultCard
