import { useState } from 'react'
import HeaderFooter from './Components/HeaderFooter'
import HeroPage from './Components/HeroPage'
import Services from './Components/Services'
import CoachPage from "./Components/CoachPage"
import Contact from "./Components/Contact"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderFooter>
        <div className='main_wrapper'>
          <HeroPage/>
          <Services/>
          <CoachPage/>
          <Contact/>
        </div>
      </HeaderFooter>
    </div>
  )
}

export default App
