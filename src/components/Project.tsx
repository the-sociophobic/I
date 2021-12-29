import React from 'react'

import { Context } from './Store'


export type ProjectProps = {

}


const Project: React.FC<ProjectProps> = ({

}) => {
  const state = React.useContext(Context)

  return (
    <div className='Project'>

    </div>
  )
}


export default Project