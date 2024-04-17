import './Value.css'
import React,{useState,useEffect} from 'react'
import affordable from '../img/Affordability.png'
import sus from '../img/sustainable-icon.png'
import innovation from '../img/VSE-icons-15-1-300x300.webp'
import customer from '../img/5460427.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


// const Value = () => {
    // const [className, setClassName] = useState(null);
    const ScrollAnimationComponent = () => {
        const [className, setClassName] = useState(null);
        const [scrollV, setScrollV] = useState(0);
      
        useEffect(() => {
            const handleScroll = () => {
              setScrollV(window.scrollY);
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
          const [show ,setShow] =useState([0,1,2]);
          
  return (
    <section className='value-wrapper wrapper'>
          <div style={{marginTop:'5rem'}}>
            <h1 className=''style={{textAlign:'center',fontSize:'2.5rem',color:'#009432',fontWeight:'500'}}> Our Values</h1>
            <div style={{color:' #c23616',border:'1px solid',width:'80%',margin:'0 auto'}}></div>
            </div>     
        <div className='paddings innerWidth 
        flexcenter value-container'> 
            <div 
             data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine"
            className="flexColStart value-right">
                
                <span className='text-gradient'> Value We Give to You</span>
                <h1 className='secondaryText'>
                    We always ready to help by providing the best 
                    services for you.
                </h1>
                <div className="cards valuecards">
                <div className="card red valuecard">
                <img src={sus} alt="" />
                <p className="tip">Sustainability</p>
                <p className="second-text1">
                We are dedicated to promoting sustainability and 
                environmental responsibility in everything we do.
                    </p>
                </div>
                <div className="card blue">
                    <img src={innovation} alt="" />
                <p className="tip">	Innovation</p>
                <p className="second-text">
                We strive to stay at the forefront of technological 
                advancements in the renewable energy industry.
                </p>
                </div>
                <div className="card green">
                    <img src={customer} alt="" />
                <p className="tip2"> 	Customer Satisfaction</p>
                <p className="second-text">
                We prioritize customer satisfaction and are committed to delivering 
                high-quality solutions.
                    </p>
                </div>
                <div className="card red1">
                    
                    <img src={affordable} alt="" />
                
                <p className="tip">Affordability</p>
                <p className="second-text4">
                We offer competitive pricing and financing options, ensuring that clean
                 energy solutions are within reach for everyone.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default  ScrollAnimationComponent