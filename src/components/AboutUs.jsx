import React from 'react'
import aboutus from '../img/solar-panels-on-earth.jpg'
import './AboutUs.css'
import {motion } from 'framer-motion'
import img from '../img/1.jpg'

const AboutUs = () => {
    
  return (
    <div className='aboutuswrapper' style={{}}>
      <div className='aboutus-con' >
     
        </div>
        <div>
        <h1 style={{textAlign:'center',marginTop:'2rem',color:' #c23616'}}>About Us</h1>
        <hr style={{color:' #c23616',border:'1px solid',width:'80%',margin:'0 auto'}}/>
        </div>
        <div className='aboutus'>
           
            < motion.div 
             initial={{y:'2rem', opacity:0}}
             animate={{y:0, opacity:1}}
             transition={{
                 duration:2,
                 type: "ease-in"
             }}
            className='aboutus-img'>
            <img src={aboutus} alt="" />
            </motion.div>
            <motion.div 
             initial={{y:'2rem', opacity:0}}
             animate={{y:0, opacity:1}}
             transition={{
                 duration:2,
                 type: "ease-in"
             }}
            className='aboutcon wrapper'>
                <p className='about-des' style={{marginTop:'5rem',marginLeft:'2rem'}}>
                    <span style={{color:'#d35400',fontStyle:'italic'}}>Smart Tech Solutions</span> is a leading provider of solar integration <br />
                     and energy management solutions.
                      With a team of 
                    experienced professionals and a commitment to excellence, <br />
                    we deliver customized solutions tailored to meet the <br />
                    unique needs of our customers.
                    </p>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUs