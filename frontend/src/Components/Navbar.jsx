import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <header className=" p-0  w-100 bg-transparent bg-opacity-25" >
        <div className="container d-flex flex-wrap  ">
          <a
            to="/"
            className="text-decoration-none  me-lg-auto  "
          >

            <span className="fs-1 text-dark  fw-bold" style={{ fontFamily: "	Brush Script MT" }}>OpenGalaxy</span>
          </a>
          <ul className="nav  d-flex flex-wrap justify-content-center align-items-center">
            <li className="nav-item">
              <Link to="/Login" className="nav-link nav-button bg-white text-dark p-1 fs-4 px-3">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Signup" className="nav-link nav-button fs-4 px-3">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link nav-button fs-5 px-3">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link nav-button fs-5 px-3">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>


          </ul>
        </div>

      </header>
    </div>
  )
}

export default Navbar