import React from 'react'

import ResizeObserver from 'resize-observer-polyfill'

import TitleAvatar from './TitleAvatar'

export type TitleProps = {

}


const Title: React.FC<TitleProps> = ({

}) => {
  const containerRef = React.useRef<any>(null)
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
  let resizeObs;
  resizeObs;
  const resize = () => {
    if (containerRef.current)
      setDimensions({
        width: containerRef.current.clientWidth || 1,
        height: containerRef.current.clientHeight || 1
      })
  }
  React.useEffect(() => {
    resizeObs = new ResizeObserver(resize.bind(this))
      .observe(containerRef.current)
  }, [])

  const screenRatio = dimensions.width / (dimensions.height || 1)
  const isHorizontalTitle = screenRatio > 1
  const calcFontSize = () => {
    // const numberOfLetters = 'МОЁ ИМЯЛЕФ ВАСИЛЕФЯ ЕБААШУСИЛЬНО'.length
    const letterRatio = 26 / 62
    const longestHorizontal = 'Я ЕБААШУСИЛЬНО'.length
    const longestVertical = 5

    return Math.round(isHorizontalTitle ?
      dimensions.width / longestHorizontal / letterRatio / 1.0
      :
      dimensions.height / longestVertical / 1.3
    )

  }
  const fontSize = calcFontSize()

  const HorizontalTitle = () =>
    <h1
      className='Title__h1 Title__h1--horizontal'
      style={{ fontSize }}
    >
      <p className='p inherit-all text-title' >МОЁ ИМЯ</p>
      <p className='p inherit-all text-name' >ЛЕФ ВАСИЛЕФ</p>
      <div className='d-flex flex-row align-items-center inherit-all'>
        <p className='p inherit-all d-inline text-title' >Я ЕБ</p>
        <TitleAvatar fontSize={fontSize * .8} />
        <p className='p inherit-all d-inline text-title' >ШУ СИЛЬНО</p>
      </div>
    </h1>

  const VerticalTitle = () =>
    <h1
      className='Title__h1'
      style={{ fontSize }}
    >
      <p className='p inherit-all text-title' >МОЁ ИМЯ</p>
      <p className='p inherit-all text-name' >ЛЕФ ВА-</p>
      <p className='p inherit-all' ><span className='inherit-all text-name'>СИЛЕФ</span> Я</p>
      <div className='d-flex flex-row align-items-center inherit-all'>
        <p className='p inherit-all d-inline text-title' >ЕБ</p>
        <TitleAvatar fontSize={fontSize * .8} />
        <p className='p inherit-all d-inline text-title' >ШУ</p>
      </div>
      <p className='p inherit-all d-inline text-title' >СИЛЬНО</p>
    </h1>

  return (
    <div className='Title'>
      <div className='container d-flex align-items-center justify-content-center' ref={containerRef}>
        {isHorizontalTitle ?
          <HorizontalTitle />
          :
          <VerticalTitle />
        }
      </div>
    </div>
  )
}


export default Title