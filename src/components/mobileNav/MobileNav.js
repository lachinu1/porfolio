import React from 'react'
import { Link } from 'react-scroll'

// Estilos
import './MobileNav.css'

const MobileNav = ({ toggleMobilenavVisible, mobilenavVisible }) => {

  return (
    <div className="mobilenav-wrapper">
      <div className={'mobilenav ' + (mobilenavVisible ? 'on' : 'off')}>
        <div className="mobilenavlinks">
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              HOME
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              SOBRE MI
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              EXPERIENCIA
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              PROYECTOS
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
