import React from 'react'
import { Fade } from 'react-reveal'

import ExperienceCard from '../experienceCard/ExperienceCard'
import experienceData from '../../data/experience.json'
import Section from '../section/Section'
import Button from '@material-ui/core/Button'

// Estilos
import './Experience.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

  download: {
    '&': {
      backgroundColor: '#e70b5c',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#b80c4b',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const Experience = () => {

  const classes = useStyles()

  return (

    <Section title="Experiencia">
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
        <Fade bottom duration={1200} distance="20px">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <p style={{ textAlign: 'center' }}>
            Podes ver mi perfil de{' '}
              <a
                href="https://www.linkedin.com/in/flobelascuain/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0be779',
                  cursor: 'pointer',
                }}
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Fade>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button
            className={classes.download}
            type="download"
            variant="contained"
            value="Flo Belascuain CV"
          >
            <a
              style={{ textDecoration: 'none', color: '#ffffff', cursor: 'pointer' }}
              href="../../flobelascuain-cv.pdf"
              download="Flo Belascuain CV"
            >
              Descargar mi CV
            </a>
            </Button>
          </div>
      </div>
    </Section>
  )
}

export default Experience
