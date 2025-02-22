import Routing from './utils/Routing'
import Navbar from './components/Navbar'
import AnimatedCursor from "react-animated-cursor"


const App = () => {
  
  return (
    <div className='text-black' >
      <Navbar/>
      <AnimatedCursor  />
      <Routing/>
    </div>
  )
}

export default App