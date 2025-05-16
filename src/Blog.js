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
    <div style={{ marginLeft:'20px', marginRight:'20px',paddingTop: '10px', paddingBottom:'70px', marginBottom:'160px' }}>
    <p style={{ textAlign: 'center', letterSpacing: '2px', fontFamily: 'Kanchenjunga, sans-serif', textTransform: 'uppercase', fontSize: '10px', marginBottom: '10px', marginTop: '20px' }}>
      News && Blog
    </p>
    <h1 style={{ color: '#2f3d7e', fontWeight: 'bold', fontFamily: 'Kanchenjunga, sans-serif', fontSize: '40px', textAlign: 'center' }}>
    Read Our Latest News
    </h1>
  
    <div style={{ display: 'flex', gap: '10px', margin: '40px 140px 0 140px' }}>
      {propertyTypes.map((item, index) => (
        <div key={index} style={{
          width: '320px',
          height: '100px',
          border: '1px solid #edf0ff',
          borderRadius: '14px',
          textAlign: 'left',
          backgroundColor: '#fff',
          
        }}>
          <div style={{ position: 'relative',  }}>
            <img
              src={item.icon}
              alt={item.title}
              style={{
                width: '300px',
                height: '180px',
                objectFit: 'cover',
                borderTopLeftRadius:'14px',
                borderBottomRightRadius:'14px',
                borderBottomLeftRadius:'14px'
              }}
            />
          </div>
          <h3 style={{ margin: '10px', fontSize: '18px', color:'#b5b4b4' }}>{item.title}</h3>
          <p style={{margin: '0 10px 5px 10px', fontSize: '13px', color: '#555', fontWeight: 'bold' }}>{item.title1}</p>
        </div>
      ))}
    </div>
  </div>
   )}

export default Blog