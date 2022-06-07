import React from 'react'
import { Bounce } from 'react-reveal'

import Section from '../section/Section'

// Imagenes
// import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import gitlab from '../../images/social/gitlab.png'
// import facebook from '../../images/social/facebook.png'

// Estilos
import './Contact.css'


const Contact = () => {

  return (
    <Section title="Contacto">
      {/* <ContactForm /> */}
      <Bounce cascade>
        <div className="links">
          <a href="https://gitlab.com/chinu10" target="_blank" rel="noopener noreferrer" >
            <img src={gitlab} alt="Gitlab Logo" width="30px" />
          </a>
          <a href="https://www.linkedin.com/in/flobelascuain/" target="_blank" rel="noopener noreferrer" >
            <img src={linkedin} alt="Linkedin Logo" width="30px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
