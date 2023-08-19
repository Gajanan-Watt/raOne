import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <>
        <div className='navbar'>
            <div className='navbarLogo' onClick={() => navigate("/")} >Ra.One</div>
            <div className='navigationMenu'>
                <div className='services' onClick={() => navigate("/services")}>Services</div>
                <div className='projects' onClick={() => navigate("/projects")}>Project</div>
                <div className='projects' onClick={() => navigate("/aboutus")}>About</div>
                <div>Thoughts</div>
            </div>
            <div className='navigationGet'> <a href="https://docs.google.com/forms/d/1rBYLj_vr5RSFHZXaFQbpMYS5xPtOsDCkVR0iAXzZmH8/viewform?edit_requested=true" style={{textDecoration: 'none', color: 'black'}}>Get in touch</a></div>
        </div>
    </>
  )
}
