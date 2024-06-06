import ProtectedRoutes from './ProtectedRoutes'
import QueryWrapper from './QueryWrapper'


function App() {
  return (
    <QueryWrapper>
      <div className='App'>
        <div className='content'>
          <ProtectedRoutes />
        </div>
      </div>
    </QueryWrapper>
  )
}


export default App
