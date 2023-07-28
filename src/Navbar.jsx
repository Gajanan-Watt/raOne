import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='navbarLogo' >Ra.One</div>
            <div className='navigationMenu'>
                <div>About</div>
                <div>Services</div>
                <div>Project</div>
                <div>Thoughts</div>
            </div>
            <div className='navigationGet'> <a href="https://docs.google.com/forms/d/1rBYLj_vr5RSFHZXaFQbpMYS5xPtOsDCkVR0iAXzZmH8/viewform?edit_requested=true" style={{textDecoration: 'none', color: 'black'}}>Get in touch</a></div>
        </div>
    </>
  )
}
