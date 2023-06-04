import React from 'react'
import Navbar from './navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

function Error404() {
  return (
    <>
    <Navbar/>
    <div id = "notfound">
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
            </div>
            <h2>We Are Sorry, Page Not Found</h2>
            <p>
                The Page you are looking for might have been removed or maybe the name would have changed or is temporarily unavailable.
            </p>
            <NavLink to = "/">Back to Home</NavLink>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Error404