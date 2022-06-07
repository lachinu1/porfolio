import React, { useState, useEffect } from 'react'
import { Fade } from 'react-reveal'
import ApolloClient, { gql } from 'apollo-boost'
import Button from '@material-ui/core/Button'
import { featured_projects } from '../../data/featured_projects.json'

import Project from '../project/Project'
import Section from '../section/Section'
import FeaturedProject from '../featuredProject/FeaturedProject'

// Estilos
import './Projects.css'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  moreProjects: {
    '&': {
      margin: '20px auto',
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#0be779',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      padding: 4,
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    console.log(
      `Token is ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    )
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    })
  },
})

const queryInfo = {
  owner: 'jigalin',
  repositories: [
    'portfolio-landing-page',
    'react-pokedex',
    'JS-DOM-for-beginners',
  ],
}

const query = gql`
  fragment repoProperties on Repository {
    name 
    description
    url
    id
    diskUsage
    languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {
      nodes {
        name
        color
      }
    }
  }

  {
    user(login: "${queryInfo.owner}") {
      ${queryInfo.repositories
        .map(
          (repo, index) => `repo${index + 1}: repository(name: "${repo}") {
        ...repoProperties
      }`
        )
        .join('\n')}
    }
  }`

const Projects = () => {

  const [gitlabProjects, setGitlabProjects] = useState([])
  const [loadProjectsError, setLoadProjectsError] = useState(null)

  const classes = useStyles()

  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = async () => {
    try {
      const queryResult = await client.query({
        query,
      })
      setGitlabProjects(queryResult.data.user)
      setLoadProjectsError(false)
    } catch (error) {
      console.log(error)
      setLoadProjectsError(true)
    }
  }

  if (loadProjectsError === false) {
    return (
      <Section title="Projects">
        <div className="projects-content">
          <ul className="projects-list">
            {featured_projects.map((featuredProject) => {
              return (
                <li key={`featured-project-${featuredProject.id}`}>
                  <Fade bottom duration={1000} distance="20px">
                    <FeaturedProject
                      name={featuredProject.name}
                      link={featuredProject.link}
                      description={featuredProject.description}
                      colour={featuredProject.colour}
                      languages={featuredProject.languages}
                    />
                  </Fade>
                </li>
              )
            })}
            {Object.keys(gitlabProjects).map((repo) => {
              if (gitlabProjects[repo].name) {
                return (
                  <li key={gitlabProjects[repo].name}>
                    <Fade bottom duration={1000} distance="20px">
                      <Project project={gitlabProjects[repo]} type={'github'} />
                    </Fade>
                  </li>
                )
              } else {
                return null
              }
            })}
          </ul>
          <Fade bottom duration={1000} distance="20px">
            <div className="more-projects-wrapper">
              <a
                className="project-link"
                href={'https://gitlab.com/chinu10'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={classes.moreProjects}
                  type="button"
                  variant="contained"
                >
                  more projects
                </Button>
              </a>
            </div>
          </Fade>
        </div>
      </Section>
    )
  } else {
    return null
  }
}

export default Projects
