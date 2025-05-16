import React from 'react'
import mountainhome from './assests/mhouse.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Sell = () => {
  return (
    <div className='sellDiv'>
        <div className='sellLeftDiv'>
            <p className='sellLeftDiv-p'>Why Choose Us</p>
            <h1 className='sellLeftDiv-h1'>Let's Find the Right <br/> Selling Option for You</h1>
                {/* <p style={{color:'#969696'}}>Beautiful Scene Around</p>
                <p style={{color:'#969696'}}>Beautiful Scene Around</p> */}
            <p className='sellLeftDiv-p1'>Lorem ipsum dolor sit amet, consectetur adipiscing alit, sed do <br/> eiusmod tempor incididunt ut labore et dolor magna aliqua<br/>
            consectetur adipiscing elit</p>
            <div className='sellSecondDiv'>
              <FontAwesomeIcon icon='fa-fa-check'  /> 
               <p className='sellSecondDiv-p'> Find Excellent Deals</p>
                <p className='sellSecondDiv-p'>Friendly Host & Fast Support</p>
            
                <p className='sellSecondDiv-p'>List Your Own Property</p>
                
            </div>
            <button className='sellDiv-button'>Read More</button>

        </div>
        <div className='sellDiv-img'>
        </div>
        </div>
  )
}

export default Sell;