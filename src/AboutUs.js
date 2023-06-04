import React from 'react'
import howData from "./API/howToUse"

function AboutUs() {
  return (
    <>
    <section className='common-section our-services'>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                    <img src="https://media.istockphoto.com/id/1126621519/photo/man-shopping-online-using-laptop-computer-and-credit-card.jpg?s=170667a&w=0&k=20&c=BMWvy4tpMi26GMUHtytvh8X8qFzAXjk1q8L_f_nppG4=" alt="aboutusImg"></img>
                </div>

                <div className='col-12 col-lg-7 our-services-list'>
                    <h3 className='mini-title'>
                     -- AVAILABLE ON PLAY STORE AND APP STORE    
                    </h3>
                     <h1 className='main=heading'>How to use the app?</h1>
                    {howData.map((e)=>{
                        return(
                            <>
                            <div className='row our-services-info'>
                        <div className='col-1 our-services-number'>{e.id}</div>
                        <div className='col-10 our-services-data'>
                            <h2>{e.title}</h2>
                            <p className='main-hero-para'>
                                {e.info}
                            </p>
                        </div>
                        <br/>
                         <button className='btn-style btn-style-border'>Learn More</button>
                    </div>
                            </>
                        )
                    })}
                   
                    
                </div>
            </div>
        </div>

    </section>



    {/* Second Part of About-Us Section */}

    <section className='common-section our-services our-services-rightside'>
        <div className='container mb-5'>
            <div className='row'>
                

                <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column'>
                    <h3 className='mini-title'>
                     -- SUPPORT IN 50+ LANGUAGES    
                    </h3>
                     <h1 className='main=heading'>World class support anytime anwhere</h1>
                    {howData.map((e)=>{
                        return(
                            <>
                            <div className='row our-services-info'>
                        <div className='col-1 our-services-number'>{e.id}</div>
                        <div className='col-10 our-services-data'>
                            <h2>{e.title}</h2>
                            <p className='main-hero-para'>
                                {e.info}
                            </p>
                        </div>
                        <br/>
                         <button className='btn-style btn-style-border'>Learn More</button>
                    </div>
                            </>
                        )
                    })}
                   
                    
                </div>

                <div className='col-12 col-lg-5 our-service-rightside-img'>
                    <img className='img-fluid' src="https://media.istockphoto.com/id/1263022886/photo/serious-female-call-center-operator-in-headset-talking-with-customer.jpg?s=612x612&w=0&k=20&c=8iXUlVQsJ4QQGqOmE6k2TgJD5Zp6NoYuqzlYKLIy6oM=" alt="aboutusImg"></img>
                </div>
            </div>
        </div>

    </section>


    </>
  )
}

export default AboutUs