import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import ContainerBody from './ContainerBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ContainerBody/>
      {/* <ContainerBody/> */}
    </>
  )
}

export default App