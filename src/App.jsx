import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import ContainerBody from './ContainerBody'
import { Footer } from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ContainerBody/>
      <div>&nbsp;</div>
      <Footer/>
      {/* <ContainerBody/> */}
    </>
  )
}

export default App
