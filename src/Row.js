import React, { useState, useEffect } from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // A snipprt of code which runs based on a specfic condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
      <div className="row">
          <h2>{title}</h2>
          {/* title */}
          <div className="row__posters">
            {/*several row__poster(s) */}

            {movies.map(movie => (
              <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
            ))}
          </div>
      </div>
    )
}

export default Row
