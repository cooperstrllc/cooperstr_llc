import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <ul>
                <Link to="/" >Home - Image </Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                {/* <Link to="/"></Link>
                <li>Reviews</li> */}
            </ul>
        </nav>
    )
}

export default Header

// https://www.google.com/maps/place/Coopers+TR,+LLC/@33.5138189,-84.2154808,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0x25276d3d9806963!8m2!3d33.5138189!4d-84.2132921!9m1!1b1