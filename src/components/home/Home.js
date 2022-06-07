/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
// import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
// import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'

import Navbar from '../navbar/Navbar'
import config from '../../config'

// Imagenes
import profile from '../../images/flo.png'
import linkedin from '../../images/social/linkedin.png'

// Estilos
import './Home.css'

const Home = () => {

  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="flo profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
             Hola 😊, soy <span className="name">Flo Belascuain</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
              👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'Designer UI & Frontend Developer.',
                    'Me gusta el diseño web...',
                    'Quiero aprender nuevas tecnologías...',
                    'Mejorar mis Skills...',
                    'Crear experiencias digitales...',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/flobelascuain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
              </div>
            </Bounce>
            {/* <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div> */}
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
