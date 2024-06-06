import React from 'react'

import Link from './Link'

import Telegram from '../styles/img/telegram.svg'
import Instagram from '../styles/img/instagram.svg'


export type HeaderProps = {

}


const Header: React.FC<HeaderProps> = ({

}) => {
  return (
    <header className='Header'>
      <div className='container h-100 d-flex flex-row justify-content-end align-items-center'>
        <Link
          to='https://t.me/the_sociophobic'
          className='Header__link me-3'
        >
          <Telegram />
        </Link>
        <Link
          to='https://instagram.com/the_sociophobic'
          className='Header__link'
        >
          <Instagram />
        </Link>
      </div>
    </header>
  )
}


export default Header