import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './atoms/Navbar'
import ContainerBody from './ContainerBody'
import { Footer } from './atoms/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './components/Services'
import Projects from './components/Projects'
import AboutUs from './components/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContainerBody />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutus" element={<AboutUs />} />

        </Routes>
      </BrowserRouter>
      <div>&nbsp;</div>
      {/* <ContainerBody/> */}
    </>
  )
}

export default App
