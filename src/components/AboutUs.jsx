import React from 'react'
import aboutus from '../img/solar-panels-on-earth.jpg'
import './AboutUs.css'
import {motion } from 'framer-motion'
import img from '../img/1.jpg'

const AboutUs = () => {
    
  return (
   <>
     <div className='aboutus-div'>
     <div className='aboutus-con' >
     
     </div>

        <div className="inner-div">
        <h1 style={{color:'#006B3C',fontWeight:'bold'}}>About Us</h1>
        <div style={{color:'#009432',width:'60%',margin:'0 auto',border:'1.5px solid'}} ></div>
        </div>
        <div className='about-con'>
          <section className='about-section'>
            <div className='about-img'>
               <img src={img} alt="" />
            </div>
            <div className="about-content">
            <p className='about-text'>
                    <span style={{color:'#006B3C',fontStyle:'italic',fontWeight:'bold'}}>Smart Tech Solutions</span> is a leading provider of solar integration <br />
                     and energy management solutions.
                      With a team of 
                    experienced professionals and a commitment to excellence, <br />
                    we deliver customized solutions tailored to meet the <br />
                    unique needs of our customers.
                    </p>
            </div>
          </section>
        </div>
        </div> 
    </>
  )
}

export default AboutUs