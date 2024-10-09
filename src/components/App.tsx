import ProtectedRoutes from './ProtectedRoutes'
import QueryWrapper from './QueryWrapper'
import TelegramButton from './TelegamButton'


function App() {
  return (
    <QueryWrapper>
      <div className='App'>
        <div className='content'>
          <ProtectedRoutes />
          <TelegramButton />
        </div>
      </div>
    </QueryWrapper>
  )
}


export default App
