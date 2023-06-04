import React, { useState } from 'react'
import Footer from './Footer'

function Contact() {
  const[userData, setUserData] = useState({
    firstName: "",
    lastName :"",
    phone: "",
    email:"",
    address:"",
    message:""

  })

  let name, value;
  function postUserData(event){
    name = event.target.name
    value = event.target.value

    setUserData({...userData, [name]:value})
  }

  async function sumbitData(event){
    event.preventDefault()
    const{firstName, lastName, phone, email, address, message} = userData
    if(firstName && lastName && phone && email && address && message){
    const res = await fetch("https://nikhilpay-1b8ad-default-rtdb.firebaseio.com/userDataRecords.json",
    {method: "POST",
  headers : {
    "Content-type" :"application/json"
  },
  body:JSON.stringify({
    firstName, lastName, phone,email, address, message
  })
}
    )


    if(res){
      setUserData({
        firstName: "",
    lastName :"",
    phone: "",
    email:"",
    address:"",
    message:""
      })
      alert("Details Sent Successfully")
    }
    else{
      alert("No data")
    }
  }
  else{
    alert("Please fill the data completely.")
  }
  }
  return (
    <>
    <section className='contactus-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='contactus-leftside col-12 col-lg-5'>
                            <h1 className='main-heading fw-bold'>Contact with our <br/>Sales Team</h1>

                            <p className='main-hero-para'>Lorem ipsum dolor sit amet queis?</p>
                            <figure>
                                <img className='contactimg img-fluid' src="https://static.vecteezy.com/system/resources/previews/001/263/984/original/contact-us-concept-free-photo.jpg"></img>
                            </figure>
                        </div>

                        {/* Right Side of contact us page */}

                        <div className='contact -rightside col-12 col-lg-7'>
                            <form method='POST'>
                                
                                    <div className='row'>
                                        <div className='col-12 col-lg-6 contact-input-field'>
                                          <input className='form-control' name= "firstName" type='text' placeholder='First Name' value = {userData.firstName} onChange={postUserData}></input>  
                                        </div>

                                        <div className='col-12 col-lg-6 contact'>
                                          <input className='form-control' type='text' placeholder='Last Name' name = "lastName"value = {userData.lastName} onChange={postUserData}></input>  
                                        </div>

                                    </div>


                                    <div className='row'>
                                        <div className='col-12 col-lg-6 contact-input-field'>
                                          <input className='form-control' type='text' placeholder='Phone Number' name='phone' value = {userData.phone} onChange={postUserData}></input>  
                                        </div>

                                        <div className='col-12 col-lg-6 contact-input-field'>
                                          <input className='form-control' type='text' placeholder='Your Email' name='email' value = {userData.email} onChange={postUserData}></input>  
                                        </div>

                                    </div>

                                    <div className='row'>
                                        <div className='col-12'>
                                            <input className='form-control contact-input-field' type='text' placeholder='Add Address' name='address' value = {userData.address} onChange={postUserData}></input>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-12'>
                                            <input className='form-control' type='text' placeholder='Enter Your Message' value = {userData.message} name='message' onChange={postUserData}></input>
                                        </div>
                                    </div>

                                    <div class="form-check form-checkbox-style">
  <input className="form-check-input main-hero-para" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label main-hero-para">
    I agree that NJ may contact me at the email provided by me.
  </label>
</div>

<button type='submit' className='btn-style w-100 ' onClick={sumbitData}>Submit</button> 
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact