import React from 'react';
import { useMovieContext } from '../context/GloabalContext';
import MovieCard from './MovieCard';
import './Watchlist.css';



function Watchlist() {
  const MovieContext= useMovieContext();
  return (
    <div className='watch-list'>
      <div className='container'>
        <div className='main-heading'>
          <h1> My Watchlist</h1>
          <span className='movies-count'>
            { MovieContext.watchList.length}
            { MovieContext.watchList.length === 1 ? "movie" : "movies"} 
            </span>
          </div>
          {
            MovieContext.watchList.length > 0 ?(<div className='movie-grid'> {
              MovieContext.watchList.map((movie)=>(
                <MovieCard key={movie.imdbID} movie={movie} type="WatchList"/>
              ) )
            } </div>) : <h2 className='no-movies'> No Movies in add list , add some ! </h2>
          }
       

      </div>
      
    </div>
  )
}

export default Watchlist
