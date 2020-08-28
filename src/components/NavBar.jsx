import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <Link to="/" className="navbar-brand" >cooperstrllc.com     ...smell it    ...see it and feel you're at home!</Link>
    
              <Link 
                className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </Link>
            
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link">
                      Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" >
                      About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link" >
                      Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" >
                      Contact 
                  </NavLink>
                </li>
              </ul>
           </div>
          </div>
     </nav>
    )
}

export default NavBar

// https://www.google.com/maps/place/Coopers+TR,+LLC/@33.5138189,-84.2154808,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0x25276d3d9806963!8m2!3d33.5138189!4d-84.2132921!9m1!1b1


