import React, { useState, useEffect } from "react"
// CSS
import "./Row.css"
// Plugins
import axios from "../plugins/axios"

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetching Data...
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.table(movies)

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* row__poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
