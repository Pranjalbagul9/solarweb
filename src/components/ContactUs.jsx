import React,{useEffect,useState,useRef} from 'react'
import './ContactUs.css'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

// const ContactUs = () => {
    const ScrollAnimationComponent = () => {
        const [className, setClassName] = useState(null);
        const [scrollA, setScrollA] = useState(0);
        const form = useRef();

        const sendEmail = (e) => {
          // e.preventDefault();
          emailjs
          .sendForm('service_2pxnesq', 'template_tk4kuzh', form.current, {
            publicKey: 'KNKWJEAlqh1ubFGLU',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
        useEffect(() => {
            const handleScroll = () => {
              setScrollA(window.scrollY);
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
  return (
    <div >
      <div className='contact-con'>
        <div className='contact-title'>
        <div className='contact-h3'>
        {/* <h3>The Best Solar Panels</h3> */}
        </div>
        </div>
      </div>
    <div className='contact-wrapper wrapper' 
    style={{width:'100%',height:'100%',marginTop:''}}>
       <motion.h3 
       initial={{y:'2rem', opacity:0}}
       animate={{y:0, opacity:1}}
       transition={{
           duration:2,
           type: "ease-in"
       }}
       style={{textAlign:'center',color:'black',padding:'1rem'}}>
       Get in Touch with <span style={{color:'#009432',fontStyle:'italic'}}>Smart Tech Solutions</span>
       </motion.h3>
       <div className='contactus-f' style={{textAlign:'center',color:'c23616',}}>
            <h5 style={{color:'#009432'}}>
            Have a question or want to learn more about our services? 
            </h5>
            <p 
            initial={{y:'2rem', opacity:0}}
            animate={scrollA > 0 ? { y: 0, opacity: 1 } : {}}
            transition={{
                duration:2,
                type: "ease-in"
            }}
            style={{fontSize:'large'}}>
            Fill out the form below, 
            and we'll get back to you as soon as possible. 
            </p>
        </div>
     
       <div style={{color:'#009432',width:'60%',margin:'0 auto',border:'1.5px solid'}} ></div>
       <div className='contact-div'>
       <motion.div 
          initial={{y:'2rem', opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{
              duration:2,
              type: "ease-in"
          }}
       className='companydetails' >
       <div className='contact-content' >
       <h2 > 
       Contact Information 
       </h2>
        <div className='contact-box'>
        <div className='icon-contact'>
        <FaLocationDot /></div>
        <div className='text-contact'>
          <h4>Address</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla a consequatur vitae iste repudiandae officiis?
             Doloribus repellendus veritatis laborum impedit.</p>
        </div>
        </div>
        <div className='contact-box'>
        <div className='icon-contact'>
        <MdEmail /></div>
        <div className='text-contact'>
          <h4>Email</h4>
          <p>smarttechsolutions@gmail.com</p>
        </div>
        </div>
        <div className='contact-box'>
        <div className='icon-contact'>
        <FaPhoneVolume /></div>
        <div className='text-contact'>
          <h4>Phone </h4>
          <p>123456789</p>
        </div>
        </div>
       </div>
       </motion.div>
    
           <div className='contactus-form'>
      
       
        <div className="form-container " >
  <form ref={form} onSubmit={sendEmail}
    
    initial={{y:'2rem', opacity:0}}
    animate={scrollA > 0 ? { y: 0, opacity: 1 } : {}}
    transition={{
        duration:2,
        type: "ease-in"
    }}
  className="form" >
    <div className="form-group">
        <h2 >Contact Us</h2>
      <label htmlFor="name">Username</label>
      <input required="" placeholder='Enter your name'
      name="from_name" id="username" type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="email"> Email</label>
      <input required="" placeholder='email'
      name="from_email" id="email" type="email" />
    </div>
    <div className="form-group">
      <label htmlFor="textarea">Message</label>
      <textarea
        required=""
        cols={50}
        rows={10}
        id="textarea"
        name="message"
        placeholder='Message'
        defaultValue={" "}
      />
    </div>
    <button type="submit" className="form-submit-btn">
      Submit
    </button>
  </form>
</div>

       </div>
           </div>
</div>
<div className='map-heading'>
  <h4 style={{textAlign:'center'}}>
  Find us on the map and visit  our office to discuss your energy needs in person.
  </h4>
  <div style={{color:'#009432',width:'80%',margin:'0 auto',border:'1px solid'}}></div> 
</div>
<motion.div 
         initial={{y:'2rem', opacity:0}}
         animate={{y:0, opacity:1}}
         transition={{
             duration:1,
             type: "ease-in"
         }}
       className='map' style={{width:'100%'}}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2283122617723!2d75.35208327504857!3d19.87257898150302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3447ac
       68fcb%3A0x288db97cca822a00!2sThetaVega%20Tech%20Privat
       e%20Limited!5e0!3m2!1sen!2sin!4v1709972752481!5m2!1sen!
       2sin" style={{
       width:"100%", height:"350px", marginTop:'2rem',
       border:"0", allowFullScreen:"" ,loading:"lazy" ,
       referrerPolicy:"no-referrer-when-downgrade"}}>

       </iframe>
       </motion.div>
    
    </div>
  )
}

        export default ScrollAnimationComponent