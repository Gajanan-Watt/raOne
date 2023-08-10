import React from 'react'
import significareel_comp from './assets/significareel_comp.mp4'
import giphy from './assets/giphy.gif'
import oval3x from './assets/oval3x.png'
import triangle from './assets/triangle.svg'
import polygon from './assets/polygon-copy.svg'


import './ContainerBody.css'
import Navbar from './Navbar'
import { Footer } from './Footer'
export default function ContainerBody() {
  return (
      <>
      <Navbar/>
        <div className='containerBody'>
            <div className='header'>
                <p className='headerText'>
                    Next Generation <br />Marketing Solutions
                </p>
                <p className='headerSubText'>
                    Ra.One delivers comprehensive solutions that blend effective <br />design with the latest technology, including Digital Marketing,<br /> Web Design, Consultation and Data Analytics.
                </p>
            </div>
            <div></div>
        </div>
        <div>&nbsp;</div>
        <div>
            <video src={significareel_comp} loop={true} muted={true} width="100%" height="550" autoPlay>
            </video>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        
        <div className='containerContent'>
            <div className='contentBody'>So what do we do exactly?</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='contentBody2'>
                <div className='contentBody2Image'>
                    <img src={giphy} width='80%' height='80%'/>
                </div>
                <div className='contentBody2text'>So we are a full-stack firm that can help <br /> you from digital marketing, website building, data analytics and consulting.</div>
            </div>
            <div className='categories'>
                <div className='category'>
                    <img src={oval3x}/>
                    <p className='categoryText'>USER-CENTERED DESIGN</p>
                    <p>Transform your business with award- <br />winning branding and user-centered <br />design for your web, mobile or XR app.</p>
                </div>
                <div className='category'>
                    <img src={triangle}/>
                    <p className='categoryText'>DEVELOPMENT</p>
                    <p>Create exceptional web, mobile and XR app <br />experiences with our multi-disciplinary <br />development team.</p>
                </div>
                <div className='category'>
                    <img src={polygon}/>
                    <p className='categoryText'>DIGITAL MARKETING</p>
                    <p>Solve challenges that other agencies can’t. <br />We’ll adapt to your codebase and revitalize <br />your code.</p>
                </div>
            </div>
        </div>
        <div>&nbsp;</div>
        <div className='containerContent'>
            <div className='contentBody'>Now Let's See <br />What We Can Do For You </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>

            <div className='reachingOut'>
                <div></div>
                <div className='contentBody2text'><a href="https://docs.google.com/forms/d/1rBYLj_vr5RSFHZXaFQbpMYS5xPtOsDCkVR0iAXzZmH8/viewform?edit_requested=true">Get started today.</a> Or if you want to get to know us a little <br />better, that's cool too. Click here to <a href="">learn more</a></div>
            </div>
        </div>
        <Footer/>
    </>

  )
}
