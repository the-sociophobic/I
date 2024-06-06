import React from 'react'

import avatar from '../assets/img/Левфиус.png'


export type TitleAvatarProps = {
  fontSize: number
}


const TitleAvatar: React.FC<TitleAvatarProps> = ({
  fontSize
}) => {

  return (
    <div
      className='Title__avatar'
      style={{
        width: fontSize,
        // transform: `translateY(${Math.round(fontSize / 12)}px)`
      }}
    >
      <img
        src={avatar}
        className='Title__avatar__img'
      />
    </div>
  )
}


export default TitleAvatar
