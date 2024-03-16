import React from 'react';
import './What.css'
import img from '../img/11.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const What = () => {
  return (
    <div data-aos="fade-down">
        <div>
            <h1 style={{textAlign:'center',fontSize:'2.8rem',color:'#009432',marginTop:'10rem'}}>
                What We Do
                </h1>
            <hr style={{   height: '4px',
                           width: '100%',
                           backgroundImage:' linear-gradient(to right,#009432 ,#043927,#2E8B57)', 
                           border: 'none',
                           width:'40%',margin:'0 auto'}}/>
        </div>
        <div className='what' style={{}}>
            <div >
                <div style={{backgroundColor:'',marginLeft:'8rem',display: 'flex', justifyContent: 'center',maxWidth: '80rem'}}>
            <h5 style={{textAlign:'justify',padding:'6rem',color:'black',}}>
            At <span style={{color:'#009432',fontSize:'1.4rem'}}>Smart Tech Solutions</span>, we specialize in providing cutting-edge solutions for harnessing renewable energy. 
            From rooftop solar installations to innovative IoT solutions, 
            we are committed to helping homeowners and businesses transition to a more sustainable energy future.
            <br /><br />
            Explore  <a href="#services-section" style={{color:'#EE5A24',textDecoration:'underline'}}>our services</a> or 
            <a href="/contactus" style={{color:'#EE5A24',textDecoration:'underline',marginLeft:'0.5rem'}}>contact us</a> to learn more
            about how we can help you save money and reduce your carbon footprint with smart energy solutions.
            </h5>
            </div>
            </div>
        </div>
          
    </div>
  )
}

export default What