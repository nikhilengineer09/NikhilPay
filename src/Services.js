import React from 'react'
import serviceData from './API/ServicAPI'
import { useState } from 'react'

function Services() {
  const[service, setService] = useState(serviceData)
  return (
    <div>
        <section className='service-main-container'>
          <div className='container service-container'>
            <h1 className='main-heading text-center fw-bold'>How to send Money?</h1>
            <div className='row'>
                      
            
              
                {service.map((e)=>{
                  return(
                    <>
                    <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
                    <img className='sendmoneyimg img-fluid' src={e.logo}></img>
                <h2 className='sub-heading'>{e.title}</h2>
                <p className='main-hero-para'>
                  {e.info}
                </p>
                </div>
                    </>
                  )
                })}
                </div>
                </div>
            
        </section>
    </div>
  )
}

export default Services