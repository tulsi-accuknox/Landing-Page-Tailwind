
import { useState } from 'react'
import './App.css'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'
import Home from './Components/Home'
import Modal from './Components/Modal'
import Navbar from './Components/Navbar'

function App() {
  
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <Home isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Gallery/>
      <Contact/>
      
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </div>
  )
}

export default App
