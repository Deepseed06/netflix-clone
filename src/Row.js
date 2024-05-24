import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'
import Spinner from './Spinner';

function Row({title, fetchUrl, isLargeRow=false}) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setIsLoading(true)
            setMovies(request.data.results);
            setIsLoading(false)
            return request;
        }
        fetchData();
    },[fetchUrl]);

  return (
    <div className='row'>
        <h3>{title}</h3                                                   >
        <div className='row_posters'>
        {movies.map(
          (movie) => 
          ((isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
            <img 
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id} 
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} 
            alt={movie.name}
            />
            )
            )}
    </div>
           {isLoading && <Spinner/>}
    </div>
  );
}

export default Row;