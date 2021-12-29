import React from 'react'


type Props = {
  className?: string
  activeClassName?: string
  style?: object
  to: string
  sameTab?: boolean
  children?: any
  onClick?: Function
  disabled?: boolean
  exact?: boolean
  outerRef?: any
}


const Link : React.FunctionComponent<Props> = ({
  className,
  activeClassName,
  style,
  to,
  sameTab,
  children,
  onClick,
  disabled,
  exact,
  outerRef,
  ...other
}) =>
  disabled || !to ?
    <span
      ref={outerRef}
      className={`Link Link--disabled ${className}`}
      style={style}
      onClick={(e: any) => onClick?.(e)}
      {...other}
    >
      {children}
    </span>
    :
    to.match(/http*|tel:*|mailto:*|#[a-zA-Z0-9]+/) ?
      <a
        ref={outerRef}
        className={`Link ${className}`}
        style={style}
        href={to}
        target={sameTab ? "" : "_blank"}
        // rel="noopener nouterReferrer"
        // rel={sameTab ? '' : 'noreferrer'}
        rel='noreferrer'
        onClick={(e: any) => onClick?.(e)}
        {...other}
      >
        {children}
      </a>
      :
      <></>


export default Link