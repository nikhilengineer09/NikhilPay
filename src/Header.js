import React from 'react'

function Header() {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column'>
                    <h1 className='display-8'>Online Payment Made<br/> Easy For You.</h1>
                    <p className='main-hero-para'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.



                    </p>
                    <h3>Get Early Access For You</h3>
                    <div className='input-group mt-3'>
                        <input type ="text" placeholder='Enter your Email' className='rounded-pill w-75 p-2 me-3 form-control-text'/>
                        <div className='input-group-button'>Get It Now</div>
                    </div>
                    </div>

                    <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images'>
                        <img className='img-fluid' src={require('./images/pic1.jpg')} />
                        <img className='img-fluid main-hero-img2' src={require('./images/bitcoin.jpg')} />
                    </div>
                
            </div>
        </section>
    </header>
    </>
  )
}

export default Header