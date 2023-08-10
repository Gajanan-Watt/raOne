import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import ContainerBody from './ContainerBody'
import { Footer } from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContainerBody/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
      <div>&nbsp;</div>
      {/* <ContainerBody/> */}
    </>
  )
}

export default App
