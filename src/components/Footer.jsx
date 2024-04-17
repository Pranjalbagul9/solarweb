import React from 'react'
import './Footer.css'

import { AiFillFacebook } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { FaFacebook ,FaInstagram,  FaLinkedin, FaTwitter,
  FaPaperPlane, FaLocationArrow
 } from "react-icons/fa";
 import { MdOutlineEmail } from "react-icons/md";
 import { FaPhoneVolume } from "react-icons/fa6";
 import { IoMdMail } from "react-icons/io";
 import logo1 from '../img/logo.png'

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
                <div className='Footer wrapper'>
                <div style={{border:'2px solid #087830',width:'95%',margin:'auto',marginBottom:'1rem'}}>
                </div>
                  <div className='containerf'>
                    <div className='row'>
                    <div className='col-md-6 col-lg-4 col-12 ft-1'>
                    <h4 >About</h4>
                      <p style={{textAlign:'justify',fontSize:'medium'}}>
                      
                        We specialize in providing cutting-edge solutions for harnessing renewable energy. 
                        From rooftop solar installations to innovative IoT solutions, 
                        we are committed to helping homeowners and businesses transition to a more sustainable energy future.
                        
                      </p>
                   </div>
                    <div className='col-md-6 col-lg-2 col-12 ft-2'>
                      <h4 className='text-left'>Quick Links</h4>
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>

                        <li>
                          <a href="/aboutus">About</a>
                        </li>
                        <li>
                          <a href="/contactus">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-6 col-lg-3 col-12 ft-3'>
                      <h4 className='text-left'>Contact Us</h4>
                       <p className='text-left'> <FaPhoneVolume style={{marginRight:'1rem'}}/>123456789</p>
                       <p className='text-left'><IoMdMail style={{marginRight:'1rem'}} />smarttechsolutions@gmail.com</p>
                       <p className='text-left'><FaPaperPlane style={{marginRight:'1rem'}}/>Aurangabad,Maharashtra</p>
                    </div>
                   
                  <div className='col-md-6 col-lg-3 col-12 ft-3'>                        
                  <h4 className='connectwithus'>Connect with us</h4>
                  <div className='footer-icons'>
                        <div className='iconsfooter'>
                        {/* <div> */}
                      
                        {/* </div> */}
                        
                     <i className='me-4 '> <FaFacebook /></i>
                      <i className='me-4'><FaInstagram /></i>
                      <i className='me-4'><FaLinkedin /></i>
                     <i className='me-4'><FaTwitter /></i> 
                
                     </div>
                      </div>
                </div>
                </div>
                  </div>
                </div>
                
                <div style={{width:'100%',backgroundColor:'#f0932b',textAlign:'center',fontSize:'large',fontWeight:'bold'}}>
                  <div>
                    Developed By <a href="https://www.thetavega.in/" className='thetavega'>Thetavega Tech &copy; 2024</a>
                  </div>
                 </div>

    </section>
  )
}

export default Footer