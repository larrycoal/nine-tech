import { useState } from 'react'
import HeaderFooter from './Components/HeaderFooter'
import HeroPage from './Components/HeroPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderFooter>
        <div className='main_wrapper'>
          <HeroPage/>
        </div>
      </HeaderFooter>
    </div>
  )
}

export default App
