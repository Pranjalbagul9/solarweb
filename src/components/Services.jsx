import React,{useEffect,useState} from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
//  import "swiper.css"
import "./Services.css"
import solar from '../img/rooftop.avif'
import solarint from '../img/solarint1.jpg'
import solariot from '../img/iot.webp'
import solarmain from '../img/maintainance.jpg'
import {motion } from 'framer-motion'
import { IoIosArrowDown } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// import 'animate.css';
// import ScrollAnimationComponent from './ScrollAnimationComponent';

// const Services = () => {
    const Services = () => {
        const [scrollY, setScrollY] = useState(0);
      
        useEffect(() => {
            const handleScroll = () => {
              setScrollY(window.scrollY);
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
    
  return (
   <section className='Ser-wrapper ' id="services-section">
    {/* <ScrollAnimationComponent /> */}
    <div className='paddings innerwidth r-container wrapper' style={{marginTop:'5rem',width:'100%'}}>
    {/* <motion.div 
 initial={{y:'2rem', opacity:0}}
 animate={scrollY > 0 ? { y: 0, opacity: 1 } : {}}
 transition={{
     duration:2,
     type: "ease-out-cubic"
 }}
style={{marginTop:'1rem',width:'100%',height:'8rem'}}>
  <h4  style={{fontFamily:'"Yanone Kaffeesatz", sans-serif',color:'#192a56',padding:'2rem'}}>
   Our mission is to empower individuals and
   businesses to take control of their energy usage and reduce their environmental impact through the 
   adoption of renewable energy technologies.Learn more about our services or contact us to schedule a consultation.
  </h4>
</motion.div> */}
       <motion.div 
       initial={{y:'2rem', opacity:0}}
       animate={scrollY > 0 ? { y: 0, opacity: 1 } : {}}
       transition={{
           duration:2,
           type: "ease-out-cubic"
       }}
       className="ser-head ">
        <h1 className='' style={{textAlign:'center',fontSize:'2.8rem',color:'#009432'}}> Our Services</h1>
        <h4 className=""style={{textAlign:'center',fontSize:'1.5rem',fontWeight:'500',color:'black'}}> 
        Innovating Solutions for Tomorrow's Challenges.
        </h4>
       </motion.div >
       <div className='container' data-aos="fade-down">
       <div 
         initial={{ y: '2rem', opacity: 0 }}
         animate={scrollY > 0 ? { y: 0, opacity: 1 } : {}}
         transition={{
           duration: 2,
           type: "ease-out-cubic", // Change this to any of the other types mentioned above
           damping: 10, // Adjust the damping for the spring animation
           stiffness: 100 // Adjust the stiffness for the spring animation
         }}
       className='row '> 
       <div className="card "
     >
  <  img src={solar} svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    {/* <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" /> */}
  </img>
  <div className="card__content">
    <p className="card__title ">Rooftop Solar Installation</p>
    <hr style={{color:' #c23616',border:'1px solid',margin:'0 auto'}}/>
    <p className="card__description">
    Customized design and installation of solar 
    panels for residential and commercial properties.
    </p>
  </div>
  <h4 htmlFor="" className='' style={{color:'#009432',textAlign:'center'}}>
   <br /> Rooftop Solar Installation</h4>
  <label htmlFor=""><IoIosArrowDown style={{marginLeft:'6rem',fontSize:'2rem'}}/></label>
</div>
<div className="card">
  <  img src={solarint} svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{}}>
    {/* <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" /> */}
  </img>
  <div className="card__content">
    <p className="card__title">
    Solar <br />Integration</p>
    <hr style={{color:' #c23616',border:'1px solid',margin:'0 auto'}}/>
    <p className="card__description">
    Integration of solar energy systems with 
    existing infrastructure for seamless energy management.
    </p>
  </div>
  <h4 htmlFor="" style={{color:'#009432',textAlign:'center',marginLeft:'3rem'}}> <br />Solar <br />Integration</h4>
  <label htmlFor=""><IoIosArrowDown style={{marginLeft:'6rem',fontSize:'2rem'}}/></label>
</div>
<div className="card">
  <  img src={solariot} svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    {/* <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" /> */}
  </img>
  <div className="card__content">
    <p className="card__title ">	IoT <br />Solutions</p>
    <hr style={{color:' #c23616',border:'1px solid',margin:'0 auto'}}/>
    <p className="card__description">
     Advanced IoT solutions 
    for monitoring and optimizing solar power generation.
    </p>
  </div>
  <h4 htmlFor="" style={{color:'#009432',textAlign:'center',marginLeft:'4.2rem'}}><br/> IoT <br />Solutions</h4>
  <label htmlFor=""><IoIosArrowDown style={{marginLeft:'6rem',fontSize:'2rem'}}/></label>
</div>
<div className="card" >
  <  img src={solarmain} svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    {/* <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" /> */}
  </img>
  <div className="card__content">
    <p className="card__title">Maintenance and Support</p>
    <hr style={{color:' #c23616',border:'1px solid',margin:'0 auto'}}/>
    <p className="card__description">
     Ongoing maintenance and support services
     to ensure optimal performance of solar energy systems.
    </p>
  </div>
  <h4 htmlFor="" style={{color:'#009432',textAlign:'center'}}> <br /> Maintenance and Support</h4>
  <label htmlFor=""><IoIosArrowDown style={{marginLeft:'6rem',color:'black',fontSize:'2rem'}}/></label>
</div>

       {/* <div className='col-lg'>
       <div className="card" >
  <img src={solar5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title primaryText">Rooftop Solar Installation</h6>
    <p className="card-text ">
    Customized design and installation of solar 
    panels for residential and commercial properties.
    </p>

  </div>
</div>
</div> */}
{/* <div className='col-lg'>
<div className="card" >
  <img src={solar5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title primaryText">
      Solar Integration
      </h6>
    <p className="card-text">
    Integration of solar energy systems with existing
     infrastructure for seamless energy management.
    </p>

  </div>
</div>
</div>
<div className='col-lg'>
<div className="card" >
  <img src={solar5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title primaryText">
      	IoT <br />Solutions
        </h6>
    <p className="card-text">
        <br />
        
    Advanced IoT solutions for
     monitoring and optimizing solar power generation.
     <br />
     
    </p>

  </div>
</div>
</div>
<div className='col-lg'>
<div className="card" >
  <img src={solar5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title primaryText">
      Maintenance and Support
        </h6>
    <p className="card-text">
     Ongoing maintenance and support services to
     ensure optimal performance of solar energy systems.
    </p>

  </div>
</div>
</div> */}
</div>

</div>
    </div>
   </section>
  )
}


export default Services;