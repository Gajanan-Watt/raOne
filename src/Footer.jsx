import './Footer.css';
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='foo_head'>
            Get in Touch            
        </div>
        <div className='foo_body'>Feel free to reach out to us for all your digital requirements. <br /> We are excited to partner with you on your journey to building a remarkable online
presence and <br /> driving your business to new heights. Contact us today for a personalized consultation</div>
        <div className='socials'>
            <a href="https://instagram.com/studio__ra.one?igshid=NGExMmI2YTkyZg=="><InstagramIcon sx={{ fontSize: "40px", textDecoration: "none", color: 'white' }} /></a>
            <a href="https://youtube.com/@shubhamRavangave"><YouTubeIcon sx={{ fontSize: "40px", textDecoration: "none", color: 'white' }} /></a>
        </div>
    </div>
  )
}
