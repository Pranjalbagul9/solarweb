import React,{useState} from 'react'
import './Header.css'
import { NavLink,Link } from 'react-router-dom';
import logo from '../img/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import OutsideClickHandler from 'react-outside-click-handler';


const Header = () => {
 

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light ">

   <div className="container-fluid">
   <img src={logo} alt="" className='logo'/>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className={"navbar-nav ms-auto mb-lg-0 "}>
        <li className="nav-item">
         <Link to="/" style={{textDecoration:'none'}}>
          <a className="nav-link " aria-current="page" href="/"
         >
             Home
          </a>
          </Link>
        </li>
        <li className="nav-item">
            <Link to="/aboutus" style={{textDecoration:'none'}} >
          <a className="nav-link "  aria-current="page" href="/" 
          >
            About Us
          </a>
          </Link>
        </li>
         < li className="nav-item">
            <Link to="/contactus" style={{textDecoration:'none'}}>
          <a className="nav-link " aria-current="page" href="/" 
          >
            Contact Us
          </a>
          </Link>
        </li>
      </ul>
    
    </div>

  </div>
  <div>
  
  </div>
</nav> 
  </>
  
  )
}

export default Header