import React from 'react'
import './Footer.css'
import logo1 from '../img/logo.png'
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram ,FaLinkedin,FaTwitter  } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Footer = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className='f-wrapper '>
        {/* <div className="  flexCenter f-container"style={{height:'10vh'}}>
         
            <div className="  f-right" style={{marginBottom:'2rem'}}>
                <h1 className='' style={{color:'white',marginLeft:'27rem',fontSize:'larger',textAlign:'center'}}>
                Connect with us on social media 
                for the latest updates and news
                </h1>
                <span className='socialmedia' style={{display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                <AiFillFacebook style={{ marginLeft: "620px",  width:'5vh',height:'3vh',color:'white'}} />
                <FaInstagram style={{width:'5vh',height:'3vh',color:'white'}} />
                <FaLinkedin style={{width:'5vh',height:'3vh',color:'white'}} />
                <FaTwitter style={{width:'5vh', marginRight:"250px",height:'3vh',color:'white'}} />
                </span>
               
                </div> */}
                {/* <div className=' f-left'>
          
             <div className='flexCenter f-menu' style={{fontSize:'small',color:'white'}}>
             <Link to="/"><a href="">Home</a></Link>
            <a href="#services-section" onClick={scrollToServices} >Services</a>
            <Link to="/aboutus"><a href="">About Us</a></Link>
           <Link to="contactus"><a href="">Contact Us</a></Link> 
                </div>
             </div> */}
                {/* </div> */}
                {/* <div className='flexCenter f-menu' style={{fontSize:'larger',marginLeft:'1rem',marginBottom:'2rem',color:'white'}}>
                   <Link to ="/"> <span>Home</span></Link>
                   <a href="#services-section" onClick={scrollToServices} >Services</a>
                   <Link to="aboutus"> <span>About Us</span></Link>
                   <Link to="contactus"> <span>Contact Us</span></Link>
                </div> */}
                <div style={{width:'100%',backgroundColor:'#f0932b',textAlign:'center',fontSize:'large'}}>
                  <div>
                    Developed By <a href="https://www.thetavega.in/" className='thetavega'>Thetavega Tech &copy; 2024</a>
                  </div>
                 </div>

    </section>
  )
}

export default Footer