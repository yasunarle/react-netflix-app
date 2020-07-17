import React, { useState } from "react"
// CSS
import "./App.css"
// Plugins
import { requests } from "./plugins/axios"
// Components
import Row from "./components/Row"
import TheBanner from "./components/common/TheBanner"
import TheNav from "./components/common/TheNav"

function App() {
  return (
    <div className="app">
      <TheNav />
      <TheBanner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
