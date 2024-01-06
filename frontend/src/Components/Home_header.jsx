import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Home_header = () => {
    
    return (
        <div>
            {/* Header */}

            <nav className=" navbar home-head  bg-opacity-75 p-0 "  >
                <div className="container d-flex flex-wrap ">
                    <ul className="nav ">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link text-white pt-2 "

                            >
                                Unlock Real Learning! Join Now to Code on Actual Projects!
                           </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/AdminSignup" className="nav-link " >
                                <i style={{paddingLeft:'400px'}} className="fa-solid fa-user text-white"></i>

                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/ContactUs" className="nav-link " >
                                <i  className="fa-solid fa-phone text-white"></i>

                            </Link>
                        </li>

                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Home_header