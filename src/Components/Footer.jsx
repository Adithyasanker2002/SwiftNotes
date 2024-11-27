import React from 'react'

const Footer = () => {
  return (
    <>
   <div style={{  backgroundImage: 'linear-gradient(to right,#38CBFB  , #E83283)',marginTop:'-24px'}} className='flex w-full relative drop-shadow bg-black-2xl'>
    <div style={{width:'2300px'}} className="col  h-72  ">
    <i style={{fontSize:'25px'}} className='fa-solid fa-book ml-7 mt-9   text-white'> <p style={{marginTop:'-28px'}} className='ml-10  font-bold text-2xl  text-white' >Swift Notes</p></i>
    <p className='ml-7 mt-2 text-white font-normal  text-base'>Designed and built with all the love in the world by <br />the Luminar team with the help of our <br />contributors. <br />Code licensed Luminar,docs CC BY 3.O. <br />Currently v5.3.2</p>
    </div>
    <div className="col w-full h-72  ">
    <p className=' ml-7 mt-9 font-bold text-2xl  text-white'> Links</p>
    <p className=' ml-7 font-normal   text-white'> Landing Page</p>
    <p className=' ml-7 font-normal   text-white'> Home Page</p>
    <p className=' ml-7 font-normal  text-white'> Watch History Page</p>
    </div>
    <div  className="col w-full h-72  ">
    <p className=' ml-7 mt-9 font-bold text-2xl  text-white'> Guides</p>
    <p className=' ml-7 font-normal   text-white'> React</p>
    <p className=' ml-7 font-normal   text-white'> React Bootstrap</p>
    <p className=' ml-7 font-normal  text-white'> React Router</p>
    </div>
    <div  className="col w-full h-72  ">
    <p  className=' ml-7 mt-9 font-bold text-2xl  text-white'> Contact Us</p>
   <p> <input type="text" className='ml-7 w-50 rounded h-7 p-2'  placeholder='Enter your email here' /> <i style={{fontSize:'19px'}} class="fa-solid fa-arrow-right text-white "></i></p>
   <div className='ml-7 mt-2'>
    <i class="fa-brands fa-twitter text-white"></i>
    <i class="fa-brands fa-instagram ml-7 text-white"></i>
    <i class="fa-brands fa-facebook ml-7 text-white"></i>
    <i class="fa-brands fa-linkedin ml-7 text-white"></i>
    <i class="fa-brands fa-github ml-7 text-white"></i>
    <i class="fa-solid fa-phone ml-7 text-white"></i>
   </div>
    </div>
    <p className='absolute left-1/3 top-60 text-white font-light text-base'>Copyright @June 2024 Batch,SwiftNotes.Built with React Quill </p>
   </div>
    </>
  )
}

export default Footer
