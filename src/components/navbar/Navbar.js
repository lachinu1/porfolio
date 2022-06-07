import React, { useState } from 'react'
import { Link } from 'react-scroll'
import MobileNav from '../mobileNav/MobileNav'

// Estilos
import './Navbar.css'

const Navbar = () => {

  const [mobilenavVisible, setMobilenavVisible] = useState(false)
  const [hamburgerClass, setHamburgerClass] = useState('')

  const toggleMobilenavVisible = () => {
    setMobilenavVisible(!mobilenavVisible)
    if (hamburgerClass === '') {
      setHamburgerClass('open')
    } else {
      setHamburgerClass('')
    }
  }

  return (
    <div className="navbar">
      <div className="navlinks">
        <div className="navlink-wrapper">
          <Link to="home" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="sobre mi" spy={true} smooth={true} duration={500}>
            SOBRE MI
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="experiencia" spy={true} smooth={true} duration={500}>
            EXPERIENCIA
          </Link>
        </div>
        {/* <div className="navlink-wrapper">
          <Link to="proyectos" spy={true} smooth={true} duration={500}>
            PROYECTOS
          </Link>
        </div> */}
        <div className="navlink-wrapper">
          <Link to="contacto" spy={true} smooth={true} duration={500}>
            CONTACTO
          </Link>
        </div>
      </div>
      {/* Menú hamburguesa - versión mobile */}
      <div className="hamburger">
        <div
          id="hamburger-icon"
          className={hamburgerClass}
          onClick={toggleMobilenavVisible}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <MobileNav
        toggleMobilenavVisible={toggleMobilenavVisible}
        mobilenavVisible={mobilenavVisible}
      />
    </div>
  )
}

export default Navbar
