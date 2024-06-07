import React from 'react'

import useProjects from '../hooks/useProjects'
import ProjectsOne from './ProjectsOne'


export type ProjectsProps = {}


const Projects: React.FC<ProjectsProps> = ({}) => {
  const projects = useProjects()

  return (
    <div className='Projects'>
      <div className='container'>
        {projects.map(project =>
          <ProjectsOne
            key={project.title}
            {...project}
          />
        )}
      </div>
    </div>
  )
}


export default Projects