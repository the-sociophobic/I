import { FC } from 'react'

import TelegramLogo from '../assets/img/TelegramLogo.svg'
import LinkWrapper from './LinkWrapper'


export type TelegramButtonProps = {
  className?: string
}


const TelegramButton: FC<TelegramButtonProps> = ({
  className
}) => {
  return (
    <LinkWrapper to='https://t.me/the_sociophobic'>
      <div className={`TelegramButton ${className}`}>
        <TelegramLogo className='TelegramButton__logo' />
      </div>
    </LinkWrapper>
  )
}


export default TelegramButton
