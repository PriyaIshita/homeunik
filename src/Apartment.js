// import React from 'react'
// import houseicon from './assests/houseicon.png';
// import apartmenticon from './assests/Apartment icon.png'
// import officeicon from './assests/office icon.png'
// import townhomeicon from './assests/townhome icon.jpg'
// import bunglowicon from './assests/bunglow icon.webp'

// const Apartment = () => {
//   return (
//    <><div>
//             <p style={{textAlign:'center', letterSpacing:'2PX', fontFamily:'Kanchenjunga, sans-serif',textTransform:'uppercase',fontSize:'10px',marginBottom:'10px',marginRight:'5px', marginTop:'70px'}}> PROPERTY TYPES</p>
//             <h1 style={{ color:'#2f3d7e', fontWeight:'bold', fontFamily:'Kanchenjunga, sans-serif', fontSize:'40px', marginTop:'10px',textAlign:'center'}}>Explore Apartment Types</h1>
//             <div style={{marginLeft:'140px',marginTop:'40px',  gap:'15px',display: 'flex', justifycontent:'spacebetween'}}>
//             <div style={{width:'200px',height:'150px', borderBottom:'3px solid #ed7d3a',border:'1px solid #edf0ff',borderRadius:'12px', textAlign:'left', lineHeight:'100px'}}>
//             <h1>House</h1>
//             <p>22 Properties</p>
//             </div>
//             <div style={{width:'200px',height:'150px', border:'1px solid #edf0ff', borderBottom:'3px solid #ed7d3a', borderRadius:'12px', textAlign:'left', lineHeight:'100px'}}>
//             <h1>House</h1>
//             <p>22 Properties</p>
//             </div>
//             <div style={{width:'200px',height:'150px',border:'1px solid #edf0ff', borderBottom:'3px solid #ed7d3a', borderRadius:'12px', textAlign:'left', lineHeight:'100px'}}>
//             <h1>House</h1>
//             <p>22 Properties</p>
//             </div>
//             <div style={{width:'200px',height:'150px',border:'1px solid #edf0ff',  borderBottom:'3px solid #ed7d3a',borderRadius:'12px', textAlign:'left', lineHeight:'100px'}}>
//             <h1>House</h1>
//             <p>22 Properties</p>
//             </div>
//             <div style={{width:'200px',height:'150px',border:'1px solid #edf0ff',  borderBottom:'3px solid #ed7d3a', borderRadius:'12px', textAlign:'lef', lineHeight:'100px'}}>
//             <h1>House</h1>
//             <p>22 Properties</p>
//             </div>


//             </div>
//     </div>


// </> 
//   )
// }

// export default Apartment

import React from 'react';
import houseicon from './assests/houseicon.png';
import apartmenticon from './assests/Apartment icon.png';
import officeicon from './assests/office icon.png';
import townhomeicon from './assests/townhome icon.jpg';
import bunglowicon from './assests/bunglow icon.webp';

const Apartment = () => {
  const propertyTypes = [
    { icon: houseicon, title: 'Houses', count: 22 },
    { icon: apartmenticon, title: 'Apartments', count: 32 },
    { icon: officeicon, title: 'Office', count: 42 },
    { icon: townhomeicon, title: 'Townhome', count: 18 },
    { icon: bunglowicon, title: 'Bunglow', count: 40 },
  ];

  return (
    <div className='apartmentDiv'>
      <p  className='apartmentDiv-p'>PROPERTY TYPES </p>
      <h1 className='apartmentDiv-h1'>  Explore Apartment Types </h1>

      <div className='apartmentFirstDiv'>
        {propertyTypes.map((item, index) => (
          <div key={index} className='apartmentFirstDiv-map'>
            <img className='apartmentFirstDiv-img' src={item.icon} alt={item.title}/>
            <h3 className='apartmentFirstDiv-h3'>{item.title}</h3>
            <p className='apartmentFirstDiv-p'>{item.count} Properties</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartment;
