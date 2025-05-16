import React from 'react'
import luxuryhome from './assests/luxuryhouse.jpg';
import equestrianhome from './assests/Ehome.webp'
import mountainhome from './assests/mhouse.jpg'
const Featuredproperty = () => {
    const propertyTypes = [
        { icon: luxuryhome, title: 'Luxury Family Home', title1: 'New York City, CA, USA', title2: '6 Bedroom   6 Bedroom', title3:'720 sq ft  1 Garages' },
        { icon: equestrianhome, title: 'Equestrain Family Home ',title1: 'New York City, CA, USA', title2: '6 Bedroom  6 Bedroom', title3:'720 sq ft  1 Garages'  },
        { icon: mountainhome, title: 'Mountain View Condos' , title1: 'New York City, CA, USA', title2: '6 Bedroom  6 Bedroom', title3:'720 sq ft  1 Garages'  },
        
      ];
    
  return (
    <div className='featuredDiv'>
    <p className='featuredDiv-p'>PROPERTIES</p>
    <h1 className='featuredDiv-h1'> Featured Properties</h1> 
  
    <div className='featuredFirstDiv'>
      {propertyTypes.map((item, index) => (
        <div key={index} className='featuredFirstDiv-mapdiv'>
          <div className='featuredFirstDiv-imgdiv'>
            <img src={item.icon} alt={item.title} className='featuredFirstDiv-img'/>
            <button className='featuredFirstDiv-button'>  Rent </button>
          </div>



          <h3 className='featuredDiv-h3'>{item.title}</h3>
          <p className='featuredDiv-p2'>{item.title1}</p>
          <br/>
          <p className='featuredDiv-p1'>{item.title2}</p>
          <p className='featuredDiv-p1'>{item.title3}</p>
          <hr className='featuredDiv-hr'/>
          <div className='featuredSecondDiv'>
            <p className='featuredSecondDiv-p'>$150,000</p>
            <button className='featuredSecondDiv-button'> View Property </button>
          </div>
        </div>
      ))}
    </div>
  </div>
   )}

export default Featuredproperty