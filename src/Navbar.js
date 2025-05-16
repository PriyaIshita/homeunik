import React from 'react'
import logo from './assests/house-logodone.jpg';

const Navbar = () => {
  return (
    
    <div className='navbar-div'>
        <div className='navbar-firstDiv' >
            <img  className='navbar-firstDiv-img' src={logo}  />Home Unik
        </div>
     
     
     <ul className='navbar-div-ul'>
        <li><a className='navbar-div-ul-li-a' href="#home">Home</a></li>
        <li><a  className='navbar-div-ul-li-a'href="#services">Services</a></li>
        <li><a className='navbar-div-ul-li-a' href ="#about">About</a></li>
       
        <li><a className='navbar-div-ul-li-a' href="#trstimonial">Testimonial</a></li>
        <li><a className='navbar-div-ul-li-a' href="#blog">Blog</a></li>

      </ul>

      {/* CTA Button */}
      <div>
      <button className='navbar-button' >Book Now</button>
     
      </div>
    {/* <div  style={{ display: "flex", marginBottom: "1rem", direction:"horizontal",  }}>
        <
        
        
    </div> */}
    </div>
  )
}

export default Navbar