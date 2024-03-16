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
            <hr style={{color:' #c23616',border:'1px solid',width:'80%',margin:'0 auto'}}/>
            </div>     
        <div className='paddings innerWidth 
        flexcenter value-container'>
          
            {/* <div className='value-left'>
              <motion.div 
              initial={{y:'2rem', opacity:0}}
              animate={scrollV > 0 ? { y: 0, opacity: 1 } : {}}
              transition={{
                  duration:4,
                  type: "linear"
              }}
              className='image-con'>
                    <img src={img} alt="" />
              </motion.div>
            </div> */}
           
            <div 
             data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine"
            className="flexColStart value-right">
                
                <span className='text-gradient'style={{fontSize:'1.8rem',marginLeft:'28rem',fontWeight:'600'}}> Value We Give to You</span>
                <h1 className='secondaryText'style={{color:'black',fontSize:'large',marginBottom:'4rem',marginLeft:'20rem'}}>
                    We always ready to help by providing the best 
                    services for you.
                </h1>
                <div className="cards">
                <div className="card red">
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

                
                {/* <Accordion
                className='accordion'
                allowMultipleExpanded={true}
                preExpanded={show}
                
                >
                    
                    <AccordionItem className={`accordionItem ${className}`}>
                <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                        <div className='flexCenter icon'>
                        <HiShieldCheck/>
                        </div>
                        <span className='primaryText'>
                        Sustainability
                        </span>
                        <div className='flexCenter icon'>
                            <MdOutlineArrowDropDown size={20}/>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    We are dedicated to promoting sustainability and 
                    environmental responsibility in everything we do.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='accordionItem'>
                <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                        <div className='flexCenter icon'>
                        <HiShieldCheck/>
                        </div>
                        <span className='primaryText'>
                        	Innovation 
                        </span>
                        <div className='flexCenter icon'>
                            <MdOutlineArrowDropDown size={20}/>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    We strive to stay at the forefront of technological
                     advancements in the renewable energy industry.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='accordionItem'>
                <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                    <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                        <div className='flexCenter icon'>
                        <HiShieldCheck/>
                        </div>
                        <span className='primaryText'>
                        	Customer Satisfaction
                        </span>
                        <div className='flexCenter icon'>
                            <MdOutlineArrowDropDown size={20}/>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                     We prioritize customer satisfaction and are committed to delivering
                     high-quality solutions and exceptional service.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

                </Accordion> */}
            </div>
        </div>
    </section>
  )
}

export default  ScrollAnimationComponent