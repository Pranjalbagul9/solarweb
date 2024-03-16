import React,{useEffect,useState} from 'react'
import './Main.css'
import solar from '../img/ImageForArticle_1593_16565953566078319.webp'
import solar2 from '../img/Modern-house-with-solar-panels.png'
import solar3 from '../img/5519581.jpg'
import solar5 from '../img/roof-solar-panel-reflecting-sun-energy-shutterstock-58645420.jpg'
import solar6 from '../img/solar-panel-cell-on-dramatic-sunset-sky-background-free-photo.jpg'
import solar7 from '../img/solar3.jpg'
import solar8 from '../img/solar5.jpg'
import solar9 from '../img/solarimg.jpg'
import {motion } from 'framer-motion'

import Services from './Services'
import Value from './Value'
import What from './What'

const Main = () => {
   

      return (
        <div>
    <section className='main-wrapper'>
    <div
  id="carouselExampleSlidesOnly"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner" >
    <div className="carousel-item active" style={{height:'45rem'}}>
      <img src={solar} className="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block" style={{marginBottom:'26rem'}}>
        <h1 className="gradient-text"style={{fontSize:'3.6rem'}}>Welcome to Smart Tech Solutions !</h1>
        <div style={{backgroundColor:'#6ab04c',opacity:'0.8'}}>
        <h2 style={{color:'white',fontWeight:'700'}}>Your Partner in Sustainable 
                     Energy Solutions.</h2>
        </div>
      </div>
    </div>
    <div className="carousel-item" style={{height:'45rem'}}>
  <img src={solar2} className="d-block w-100" alt="..." />
  <div style={{ position: 'relative', }}>
    <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
    <div className="carousel-caption d-none d-md-block" style={{ marginBottom: '8rem',backgroundColor:'white',opacity:'0.8' }}>
      <p className="" style={{ fontSize: '2.2rem', color: '#2c2c54',fontWeight:'600', }}>
      Rise to Renewable Power with Rooftop Solar Panels.
      </p>
     
    </div>
  </div>
</div>

    <div className="carousel-item"style={{height:'45rem'}}>
      <img src={solar3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block" style={{  }}>
        <div style={{backgroundColor:''}}>
      <p className="" style={{ fontSize: '2.6rem', color: '#0a3d62',fontWeight:'500',marginBottom:'25rem' }}>
      Discover the potential for up to <span style={{fontSize:'3rem',color:'white'}}>80%</span> savings on your electricity bills with solar power.
      </p>
      </div>
    </div>
    </div>
    <div className="carousel-item"style={{height:'45rem'}}>
      <img src={solar5} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block" style={{ }}>
        <div style={{backgroundColor:'#FFCA89',opacity:'0.7'}}>
      <p className="" style={{ fontSize: '2.4rem', color: '#2c2c54',fontWeight:'700',marginBottom:'29rem'}}>
     
      Transform your roof into a power plant with solar panels.
      </p> </div>
      
    </div>
    </div>
    <div className="carousel-item"style={{height:'45rem'}}>
      <img src={solar6} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block" style={{ }}>
        <div style={{backgroundColor:'white',opacity:'0.8'}}>
      <p className="" style={{ fontSize: '2.5rem', color: '#2C3A47',fontWeight:'700',marginBottom:'17rem' }}>
      Switch to Solar: Brighter, Cleaner, Better.
      </p>
      </div>
    </div>
    </div>
  </div>
</div>


    </section>
    <Services/>
    <Value />
    <What />
    </div>
    
  )
}

export default Main