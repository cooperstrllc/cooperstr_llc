import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Contact = () => {
    return (
        <div>
            <NavBar />
            <div class="col-lg-4">
                    <h1> <i> Contact Us: </i></h1>
                    
                    <h1 class="font-weight-bold">Coopers TR LLC</h1>
                    <p>Phone:
                        <br/> (678) 732-4696
                        <br/> (678) 284-0074 - Stockbridge
                        <br/> (770) 648-8424 - Conyers
                    </p>
                    <p> Address: 
                        <br/>606 Eagles Landing Parkway,
                        <br/>Stockbridge, GA 30281
                    </p>
                    <p> email us at: cooperstrllc@hotmail.com</p>
                    <p> <b>Business Hours:</b>
                        <br/>Monday - Friday 8:00am  - 6:00pm
                        <br/>Saturdy 9:00am - 5:00pm
                        <br/>Sunday: Closed
                    </p>
                    <Link  
                        className="btn btn-primary"  to="/services" >
                            Click or Call for a Free Estimate! 
                    </Link>
            </div>        
            <div>
                <h1>
                    <br/> welcome to a new way of cleaning ...<i>The</i><i> Multi Cleaners experience</i>
                </h1>
            </div>
        </div>
    )
}

export default Contact