import React from 'react'

import { Context } from './Store'
import Link from './Link'

import { ReactComponent as Telegram } from '../styles/img/telegram.svg'
import { ReactComponent as Instagram } from '../styles/img/instagram.svg'


export type HeaderProps = {

}


const Header: React.FC<HeaderProps> = ({

}) => {
  const state = React.useContext(Context)

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