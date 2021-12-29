import React from 'react'

import { Context } from './Store'


export type ProjectsProps = {

}


const Projects: React.FC<ProjectsProps> = ({

}) => {
  const state = React.useContext(Context)

  return (
    <div className='Projects'>

    </div>
  )
}


export default Projects