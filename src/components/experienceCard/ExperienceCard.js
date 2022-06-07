import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ experience }) => {

  let { link, company, title, info, stack, background } = experience
  
  return (
    <a
      className="experience-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="experience-card-wrapper">
        <div className="experience-card">
          <div className="experience-card-top">
            <div className="experience-bg" >
            <img
                className="experience-fondo"
                src={require(`../../images/fondos/${background
                  .replace(/ /g, '')
                  .toLowerCase()}.png`)}
                alt={`${background}-fondo`}
                style={
                  experience.logoheight
                    ? {
                        height: `${experience.logoheight}%`,
                      }
                    : { width: `${experience.logowidth}%` }
                }
              />
            </div>
            <div className="image-wrapper">
              <img
                className="company-logo"
                src={require(`../../images/logos/${company
                  .replace(/ /g, '')
                  .toLowerCase()}.png`)}
                alt={`${company}-logo`}
                style={
                  experience.logoheight
                    ? {
                        height: `${experience.logoheight}%`,
                      }
                    : { width: `${experience.logowidth}%` }
                }
              />
            </div>
          </div>
          <div className="experience-card-bottom">
            <div>
              <h2>{title}</h2>
              <ul>
                {info.map((point, idx) => (
                  <li key={`${company}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="experience-card-tech">
              <ul>
                {stack.map((tech) => (
                  <li key={`${company}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ExperienceCard
