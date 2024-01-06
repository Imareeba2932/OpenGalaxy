import React from 'react'

const ContactUs = () => {
  return (
    <>
    
    <div className="container-fluid bg-img-contactus">
      <div className="row ">
    <div className="card bg-light bg-opacity-25 ms-5 "style={{width:"450px",border:"none",left:"250px",marginTop:"70px"}}>
      <div className="card-body">
        <h1 className=" mb-4 text-center fw-bold" style={{fontFamily:"serif"}}>Contact Us</h1>
        <form>
      
            <input type="text" placeholder='Enter name' className='form-control mb-4 shadow py-2 px-4 text-white bg-dark input-contactus bg-opacity-25' style={{border:"none"}} />
            <input type="email" placeholder='Enter Email' className='form-control mb-4 shadow py-2 px-4 text-white bg-dark  input-contactus bg-opacity-25' style={{border:"none"}} />
           
            <input type="number" placeholder='Phone no.' className='form-control mb-4 shadow py-2 px-4 text-white bg-dark input-contactus bg-opacity-25' style={{border:"none"}} />
            <input type="text" placeholder='Enter College' className='form-control mb-4 shadow py-2 px-4 text-white bg-dark input-contactus bg-opacity-25' style={{border:"none"}} />
            <input type="text" placeholder='Enter College' className='form-control mb-4 shadow py-2 px-4 text-white bg-dark input-contactus bg-opacity-25' style={{border:"none"}} />
          
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default ContactUs