import React from 'react'
import mountainhome from './assests/mhouse.jpg';


const About = () => {
  return (
    <div className='aboutDiv'>
    <div className='aboutFirstdiv'> </div>
        <div className='aboutSeconddiv'>
            <p className='aboutSeconddiv-p'>About Home Unik</p>
            <div className='aboutThirdDiv'>The Leading Real Estate About Marketplace.</div>
            <p  className='aboutThirdDiv-p'>Lorem ipsum dolor sit amet, consectetur adipiscing alit, sed do <br/> eiusmod tempor incididunt ut labore et dolor magna aliqua<br/>
            consectetur adipiscing elit</p>
            <div className='aboutFourthDiv'>
                <p className='aboutFourthDiv-p'>Smart Home Design</p>
                <p className='aboutFourthDiv-p'>Exceptional Lifestyle</p>
            </div>
            <div className='aboutFifthDiv'>
                <p className='aboutFourthDiv-p'>Complete 24/7 Security</p>
                <p className='aboutFourthDiv-p'>Beautiful Scene Around</p>
            </div>
            <button  className='aboutSeconddiv-button'>Read More</button>

        </div>
        </div>
  )
}

export default About;