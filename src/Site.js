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
    <div style={{ backgroundColor: '#f6f8ff', paddingTop:'20px', paddingBottom:'70px' }}>
    <p style={{textAlign: 'center', letterSpacing: '2px', fontFamily: 'Kanchenjunga, sans-serif', textTransform: 'uppercase', fontSize: '10px', marginBottom: '10px', marginTop: '20px' }}>
        lOCATION
    </p>
    <h1 style={{ color: '#2f3d7e', fontWeight: 'bold', fontFamily: 'Kanchenjunga, sans-serif', fontSize: '40px', textAlign: 'center' }}>
        Properties By Cities
    </h1>
  
    <div style={{  marginTop:'40px', gap:'20px', left:'280px',display: 'flex', justifyContent: 'space-between', position: 'relative', width: '800px', height: '260px', borderRadius:'14px'  }}>
    {propertyTypes.map((item, index) => (
  <div key={index} style={{
    width: '250px',
    height: '250px',
    border: '1px solid #edf0ff',
    borderRadius: '14px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    position: 'relative',
  }}>
    <div style={{ position: 'relative', width: '100%', height: '260px' }}>
      <img
        src={item.icon}
        alt={item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          gap:'10px'
        }}
      />
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: 'white',
        padding: '6px 10px',
        borderRadius: '6px',
      }}>
        <h3 style={{ margin: '0', fontSize: '16px' }}>{item.title}</h3>
        <p style={{ margin: '0', fontSize: '12px' }}>{item.title1}</p>
      </div>
      {index === 0 && (
      <button style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        backgroundColor: '#ed7d3a',
        borderRadius: '6px',
        padding: '6px 12px',
        fontSize: '13px',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}>
        See More
      </button>
    )}
    </div>
  </div>
))}

    </div>
  </div>
   )}

export default Site