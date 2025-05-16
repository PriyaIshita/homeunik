import React from 'react'
import hero from './assests/3d-rendering-house-model_23-2150799769.jpg';
import { Input, Button, Space, Dropdown, Menu } from 'antd';
import { RiGhost2Fill } from 'react-icons/ri';


const Hero = () => {
    const menu = (
        <Menu>
          <Menu.Item key="1">1Bhk</Menu.Item>
          <Menu.Item key="2">2Bhk</Menu.Item>
          <Menu.Item key="3">1BHK</Menu.Item>
        </Menu>
      );
  return (
    <section className='heroSection'>
        <div className='heroSection-mainDiv'>
            <div className='heroSection-firstDiv'>
                <p className='heroSection-firstDiv-p'> Welcome to Home Unik</p>
                <h1 className='heroSection-firstDiv-h1'>Invest Today in <br/> Your Dream Home</h1>
                <p   className='heroSection-firstDiv-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='heroSection-secondDiv'>
                    <button className='heroSection-Button'>View Property</button>
                   &nbsp; &nbsp;
                    <button className='heroSection-Button2' >Contact Now</button>
                    </div>
                    <div className='heroSection-thirdDiv'>
                    <Input  className='heroSection-thirdDiv-input' placeholder="Enter Keyword" /> 
                    <Input className='heroSection-thirdDiv-input'  placeholder="Enter Keyword"/>
                    <Input className='heroSection-thirdDiv-input' placeholder="Enter Keyword"/>
                    <Input className='heroSection-thirdDiv-input' placeholder="Enter Keyword"/>
                    <Input className='heroSection-thirdDiv-input' placeholder="Enter Keyword"/>
                    <Button className='heroSection-thirdDiv-Button' >Search</Button>                
                       </div>
                  </div>
            </div>
    </section>
    
  )
}

export default Hero;