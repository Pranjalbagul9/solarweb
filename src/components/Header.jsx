import React,{useState} from 'react'
import './Header.css'
import { NavLink,Link } from 'react-router-dom';
import logo from '../img/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import OutsideClickHandler from 'react-outside-click-handler';
import navimg from '../img/1.jpg'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const Header = () => {
  function scrollToServices() {
    var element = document.getElementById('services'); // Assuming the ID of the element you want to scroll to is 'services'
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Element with ID "services" not found');
    }
}

    const [menuOpen, setMenuOpen] =useState(false);
    const [navbar,setNavbar] = useState(false);
    const getMenuStyles =(menuOpen) => {
        if (document.documentElement.clientWidth <= 800)
        {
            return{right: !menuOpen && "-100%"}
        }
    }

    // const changeBackground =() => {
    //   if(window.scrollY >= 90) {
    //     setNavbar(true)
    //   } else {
    //     setNavbar(false)
    //   }
    // };

  // window.addEventListener('scroll', changeBackground);

  return (
    <section className='h-wrapper wrapper' >
        <div className='flexCenter h-container'>
          <img src={logo} alt="logo"  
          style={{width:'6%',height:'6%',marginLeft:'3rem'}}
          />
          <OutsideClickHandler
          onOutsideClick={()=> {
            setMenuOpen(false);
          }}
          >
          <div className='flexCenter h-menu '
          style={getMenuStyles(menuOpen)}
          >
           
                
            <Link to="/"><a href="">Home</a></Link>
            {/* <a href="#services-section" onClick={scrollToServices} >Services</a> */}
            <Link to="/aboutus"><a href="">About Us</a></Link>
           <Link to="contactus"><a href="">Contact Us</a></Link> 
            
        </div>
        {/* <hr style={{color:'#20bf6b',border:'4px solid',width:'100%',margin:'0 auto'}}/> */}
        </OutsideClickHandler>
       
        <div className='Cimenu ' onClick={() =>setMenuOpen((prev) =>!prev)}>
            <CiMenuBurger size={30}/>
          </div>
        </div>
       
    </section>
  )
}

export default Header