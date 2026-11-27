import React from 'react'

import { ProjectMappedType } from '../projects/types'
import Img from './Img'
import Date from './Date'
import TagsSelector from './Tags/TagsSelector'


export type ProjectsOneProps = ProjectMappedType


const ProjectsOne: React.FC<ProjectsOneProps> = (project) => {
  return (
    <div className='ProjectsOne'>
      <div className='d-flex flex-row'>
        <Img
          src={project.icon}
          className='ProjectsOne__icon'
        />
        <div className='d-flex flex-column'>
          <h1 className='h1'>
            {project.title}
          </h1>
          <div className='ProjectsOne__date'>
            <Date date={project.date} />
          </div>
          <TagsSelector
            className='pt-3 pb-2'
            shownTags={project.tags}
          />
        </div>
      </div>
    </div>
  )
}


export default ProjectsOne
