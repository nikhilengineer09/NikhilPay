import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ServicePage from './pages/ServicePage'
import About from './pages/About'
import ContactPage from './pages/ContactPage'

function Navbar() {
    const [show, setShow] = useState(false)
  return (
    <>
    <section classNameName='navbar-bg'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">NikhilPay</a>
    <button className="navbar-toggler" type="button" onClick={()=>{setShow(!show)}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show?"show": ""}`} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink className="nav-link active" aria-current="page" to = "/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to = "/services">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to = "/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to = "/contact">Contact</NavLink>
        </li>
        <button className = "btn-style" type='submit'>
            Sign in
        </button>
        <button className = "btn-style" type='submit'>
            Sign up
        </button>
    
      </ul>
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar