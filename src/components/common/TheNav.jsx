import React, { useEffect, useState } from "react"
// CSS
import "./TheNav.css"
// Image
import logo from "./Netflix.png"

function TheNav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="NETFLIX LOG" />
    </div>
  )
}

export default TheNav
