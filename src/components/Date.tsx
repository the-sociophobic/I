import React from 'react'


export type DateProps = {
  date: string
}


const Date: React.FC<DateProps> = ({ date }) => {
  return (
    <div className='Date'>
      {date}
    </div>
  )
}


export default Date
