import React from 'react'
import luxuryhome from './assests/luxuryhouse.jpg';
import equestrianhome from './assests/Ehome.webp'
import mountainhome from './assests/mhouse.jpg'
const Site = () => {
    const propertyTypes = [
        { icon: luxuryhome, title: 'Surabaya', title1: '22 Properties',},
        { icon: equestrianhome, title: 'Jakarata ',title1: '22 Properties'},
        { icon: mountainhome, title: 'Medan' , title1: '22 Properties'  },
        { icon: mountainhome, title: 'Bandung' , title1: '22 Properties'  },
        
      ];
    
  return (
    <div className='siteDiv'>
    <p className='siteDiv-p' >lOCATION</p>
    <h1 className='siteDiv-h1'> Properties By Cities</h1>
  
    <div className='siteFirstDiv'>
    {propertyTypes.map((item, index) => (
  <div key={index} className='siteFirstDiv-map'>
  <div className='sittSecondDiv'>
      <img src={item.icon} alt={item.title} className='sittSecondDiv-img'/>
      <div className='siteThirdDiv'>
      <h3 className='siteThirdDiv-h3'>{item.title}</h3>
      <p className='siteThirdDiv-p'>{item.title1}</p>
      </div>
      {index === 0 && (
      <button className='siteDiv-button'> See More </button>
    )}
    </div>
  </div>
))}

    </div>
  </div>
   )}

export default Site