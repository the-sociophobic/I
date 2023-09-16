import React from 'react'


export type RadioButtonProps = {
  on: boolean
  onClick?: (e: any) => void
  children: React.ReactNode
}

const RadioButton: React.FC<RadioButtonProps> = ({
  on,
  onClick,
  children
}) =>
  <div
    className={`RadioButton ${on && 'RadioButton--on'}`}
    onClick={e => onClick?.(e)}
  >
    {children}
  </div>


export default RadioButton
