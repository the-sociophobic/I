import React from 'react'

import Title from '../components/Title'
import Projects from '../components/Projects'
import TagsSelector from '../components/Tags/TagsSelector'


const Main: React.FC = () => {
  return (
    <>
      <Title />
      <div className='container'>
        <h1 className='h1'>
          Навыки
        </h1>
        <TagsSelector
          className='pt-2 pb-5'
          showAllButton
        />
      </div>
      <Projects />
    </>
  )
}


export default Main
