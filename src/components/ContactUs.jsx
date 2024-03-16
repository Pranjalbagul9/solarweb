import React,{useEffect,useState,useRef} from 'react'
import './ContactUs.css'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';

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
       style={{textAlign:'center',color:'#009432',padding:'1rem'}}>
       Get in Touch with <span style={{color:'#009432',fontStyle:'italic'}}>Smart Tech Solutions</span>
       </motion.h3>
       <motion.p 
       initial={{y:'2rem', opacity:0}}
       animate={{y:0, opacity:1}}
       transition={{
           duration:2,
           type: "ease-in"
       }}
       style={{textAlign:'center',fontSize:'large'}}>
       Find us on the map and visit 
       our office to discuss your energy needs in person.
       </motion.p>
       <hr style={{color:'#009432',width:'60%',margin:'0 auto',border:'1px solid'}} />
       <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'1rem'}}>
       <motion.div 
         initial={{y:'2rem', opacity:0}}
         animate={{y:0, opacity:1}}
         transition={{
             duration:1,
             type: "ease-in"
         }}
       className='map' style={{width:'40%'}}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2283122617723!2d75.35208327504857!3d19.87257898150302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3447ac
       68fcb%3A0x288db97cca822a00!2sThetaVega%20Tech%20Privat
       e%20Limited!5e0!3m2!1sen!2sin!4v1709972752481!5m2!1sen!
       2sin" style={{
       width:"100%", height:"450px", 
       border:"0", allowFullScreen:"" ,loading:"lazy" ,
       referrerPolicy:"no-referrer-when-downgrade"}}>

       </iframe>
       </motion.div>
       <motion.div 
          initial={{y:'2rem', opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{
              duration:2,
              type: "ease-in"
          }}
       className='companydetails' style={{width:'50%',}}>
       <h4 style={{textAlign:'center',color:'#009432'}}> Contact Information </h4>
       <div style={{padding:'5rem',color:'#009432',boxShadow:'0 8px 16px rgba(13, 11, 11, 0.2)',height:'90%',marginLeft:'4rem'}}>
        <div>Address</div>
        <div>Email</div>
        <div>Phone No.</div>
       </div>
       </motion.div>
       </div>

       

       <div className='contactus-form' style={{marginTop:'1rem'}}>
       <hr style={{color:'#009432',width:'60%',margin:'0 auto',border:'1px solid'}} />
        <div className='contactus-f' style={{textAlign:'center',color:'c23616',marginTop:'1rem'}}>
            <h4 style={{color:'#009432'}}>
            Have a question or want to learn more about our services? 
            </h4>
            <motion.p 
            initial={{y:'2rem', opacity:0}}
            animate={scrollA > 0 ? { y: 0, opacity: 1 } : {}}
            transition={{
                duration:2,
                type: "ease-in"
            }}
            style={{fontSize:'large'}}>
            Fill out the form below, 
            and we'll get back to you as soon as possible. 
            </motion.p>
        </div>
        <div className="form-container " >
  <motion.form ref={form} onSubmit={sendEmail}
    
    initial={{y:'2rem', opacity:0}}
    animate={scrollA > 0 ? { y: 0, opacity: 1 } : {}}
    transition={{
        duration:2,
        type: "ease-in"
    }}
  className="form" >
    <div className="form-group">
        <h4 style={{textAlign:'center'}}>Contact Us</h4>
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
  </motion.form>
</div>

       </div>
    </div>
    
    </div>
  )
}

        export default ScrollAnimationComponent