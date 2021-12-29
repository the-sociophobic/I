import React from 'react'

import { Context } from './Store'


export type TitleProps = {

}


const Title: React.FC<TitleProps> = ({

}) => {
  const state = React.useContext(Context)

  return (
    <div className='Title'>
      <div className='container'>

      </div>
    </div>
  )
}


export default Title