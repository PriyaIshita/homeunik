import React from 'react'
import luxuryhome from './assests/luxuryhouse.jpg';
import equestrianhome from './assests/Ehome.webp'
import mountainhome from './assests/mhouse.jpg'
const Blog = () => {
    const propertyTypes = [
        { icon: luxuryhome, title: 'Office', title1: 'Cultivating Market Leadership        from the inside.',},
        { icon: equestrianhome, title: 'Apartments ',title1: 'Our Latest Development Projects by More Efficie. '  },
        { icon: mountainhome, title: 'Apartments' , title1: 'We Are the Next genreration of the Advertising', },
        
      ];
    
  return (
    <div className='blogDiv'>
    <p className='blogDiv-p'> News && Blog </p>
    <h1 className='blogDiv-h1'> Read Our Latest News </h1>
  
    <div className='blogFirstDiv'>
      {propertyTypes.map((item, index) => (
        <div key={index}  className='blogFirstDiv-map'>
          <div className='blogSecondDiv'>
            <img
              src={item.icon}
              alt={item.title}
                className='blogSecondDiv-img'/>
          </div>
          <h3  className='blogSecondDiv-h3'>{item.title}</h3>
          <p className='blogSecondDiv-p'>{item.title1}</p>
        </div>
      ))}
    </div>
  </div>
   )}

export default Blog