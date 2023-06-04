import React, { useState } from 'react'
import workapi from './API/worksApi'
import Footer from './Footer'

function HowItWorks() {
    const [data, setData] = useState(workapi)
  return (
    
    <div className='work-container container'>
        <h1 className='main-heading text-center'>How Does It Works?</h1>
        <div className='row'>
           
            {workapi.map((e)=>{
                return(<>
                <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                    <img className='image' src={e.logo}></img>
                    <h2 className='sub-heading'>{e.title}</h2>
                    < p className='main-hero-para w-100'>
                        {e.info}
                    </p>
                </div>
                </>)
            })}
           
        </div>
    </div>
    
    
  )
}

export default HowItWorks