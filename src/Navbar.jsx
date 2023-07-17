import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='navbarLogo' >Logo</div>
            <div className='navigationMenu'>
                <div>About</div>
                <div>Services</div>
                <div>Project</div>
                <div>Thoughts</div>
            </div>
            <div className='navigationGet'>Get in touch</div>
        </div>
    </>
  )
}
