import React from 'react'
import houseicon from './assests/houseicon.png';
import apartmenticon from './assests/Apartment icon.png';
import officeicon from './assests/office icon.png';
import townhomeicon from './assests/townhome icon.jpg';
import bunglowicon from './assests/bunglow icon.webp';

const Home = () => {
    const propertyTypes = [
        { icon: houseicon, title: 'Find Property', title1:'Lorem ipsum dolor sit amet, consectetur adipiscing alit, sed do ' },
        { icon: apartmenticon, title: 'Meet Retailer', title1:'Lorem ipsum dolor sit amet, consectetur adipiscing alit, sed do '  },
        { icon: officeicon, title: 'Documents', title1:'Lorem ipsum dolor sit amet, consectetur adipiscing alit, sed do '  },
        { icon: townhomeicon, title: 'Take the Key', title1:'Lorem ipsum dolor sit amet, consectetur adipiscing alit, sed do '  },
        
      ];
    
  return (
     <div className='homeDiv'>
          <p className='homeDiv-p'>
      How it works
    </p>
    <h1 className='homeDiv-h1'>
      Find a Perfect Home
    </h1>
    <div className='homeFirstDiv'>
        {propertyTypes.map((item, index) => (
          <div key={index} className='homeSecondDiv'>
            <img src={item.icon} alt={item.title} className='homeSecondDiv-img'/>
            <h3 className='homeSecondDiv-h3'>{item.title}</h3>
            <p  className='homeSecondDiv-p'>{item.title1}</p>
          </div>
        ))}
        
      </div>
    


    </div>
  )
}

export default Home