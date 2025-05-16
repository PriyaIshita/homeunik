import React from 'react'
import './Topbar.css'
import { hover } from '@testing-library/user-event/dist/hover'

const Topbar = () => {
  return (
    <div className='topbarDiv'>
        <div className='topbarFirstDiv'>
        <span className='topbarFirstDiv-span'>📞 Call :    (+91) 7878535701</span>|<span className='topbarFirstDiv-span'>✉️ Email : info@homeunik.com</span>

        </div>

       <div className='topbarSeconddiv'>
        <a className='topbarSeconddiv-a' href='#'>Login</a>
       <span>/</span> 
        <a className='topbarSeconddiv-a' href='#'>Register</a>
            
        </div>

    </div>
  )
}

export default Topbar