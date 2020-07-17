import React, { useState, useEffect } from "react"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
// CSS
import "./Row.css"
// Plugins
import axios from "../plugins/axios"

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    // fetching Data...
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }
  // 配列をコンソール上でテーブル
  // console.table(movies)

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* row__poster */}
        {movies.map((movie) => {
          if (movie.backdrop_path) {
            return (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                onClick={() => handleClick(movie)}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
          }
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
