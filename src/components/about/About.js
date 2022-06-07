import React from 'react'
import Typewriter from 'typewriter-effect'
// import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'

import Section from '../section/Section'
import Skills from '../skills/Skills'

// Estilos
import './About.css'

const About = () => {
  return (
    <Section title="Sobre mi">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>¿Quién soy?</h2>
            <p>
              Soy Flo{' '}
              <span role="img" aria-label="lightning">
                😉
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                👉
              </span>{' '}
              Soy UI Designer & Frontend Developer React con más de 2 años de experiencia en Diseño Web y Maquetación.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                👉
              </span>{' '}
              Trabajo principalmente con HTML, CSS, React.JS, Bootstrap, Material UI.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  👉
                </span>{' '}
                Me encanta
              </p>
              <Typewriter
                options={{
                  strings: [
                    'crear, innovar, diseñar',
                    'investigar. Soy muy curiosa',
                    'el trabajo en equipo; conocer gente nueva',
                    'la comunicación',
                    'aprender nuevas tecnologías',
                    'ayudar y colaborar',
                    'aportar ideas y conocimientos',
                    'liderar equipos',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            {/* <p>
              Since 2015 - I've spent my time seeking and learning new
              technologies and forms of digital expression. This has led to me
              working on some amazing world-class{' '}
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects
              </Link>
              , worked at some{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                amazing places
              </Link>
              , and worked with some great people.
            </p> */}
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
