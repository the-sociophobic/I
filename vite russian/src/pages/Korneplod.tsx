import React from 'react'
import Button from '../components/Button'
import Link from '../components/Link'


const Korneplod: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10 d-flex flex-column align-items-end'>
            <h1 className='h1 h1--xl my-5'>
              Полнометражный фильм «Корнеплод»
            </h1>
            <div className='mb-5'>
              Фильм находится в разработке, пока можно подписаться на канал, чтобы следить за новостями
            </div>
            <Link to='https://t.me/Nihilist_R4VE'>
              <Button>
                канал с анонсами
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


export default Korneplod
