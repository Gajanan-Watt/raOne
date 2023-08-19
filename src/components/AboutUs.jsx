import React, { useState } from 'react'
import profilePic1 from "../assets/shubh.jpeg";
import profilePic2 from "../assets/tush.jpeg";
import profilePic3 from "../assets/profile.jpeg";
import Navbar from '../atoms/Navbar';
import { Footer } from '../atoms/Footer';
import "./AboutUs.css"
import AboutUsCard from '../atoms/AboutUsCard';
import Carousel from 'react-material-ui-carousel';

export default function AboutUs() {

    const [aboutInfo, setAboutInfo] = useState([
        {
            id: 0,
            profile: "../assets/shubh.jpeg",
            name: "Shubham Ravangave",
            desc: "A visionary creator at the helm of Studio_Ra.One. MBA graduate specializing in Data Science and Finance, certified Google Digital Marketer. Seamlessly blending technology and creativity to craft captivating visual stories. Elevating businesses through bespoke videos, motion logos, and brand narratives. Redefining the landscape with innovation and acommitment to uniqueness.",
            phoneNumber: "+919960728829",
            mailId: "ra.onegaveshubham@gmail.com"
        },
        {
            id: 1,
            profile: "../assets/tush.jpeg",
            name: "Tushar Tagadpallewar",
            desc: "As a Business Intelligence guy, I thrive on data exploration. With a solid foundation in analytics, I'm adept at transforming numbers into meaningful insights. My expertise lies in creating clear visualizations and assisting in data-driven decision-making. Collaborative by nature, I enjoy working with teams to uncover trends that drive growth. I'm committed to continuous learning, staying updated on BI tools and methodologies. With a passion for turning data into actionable strategies, I'm dedicated to supporting businesses in making informed choices for success.",
            phoneNumber: "+919096091980/+447459539881",
            mailId: "tushartagadpallewar198@gmail.com"
        },
        {
            id:2,
            profile: "../assets/profile.jpeg",
            name: "Gajanan Wattamwar",
            desc: "I'm a Full Stack developer, who can create websites with good design and customer centric customisation. I'll will be responsible for scaling your website to handle large traffic. Your insights will always be helpful to build website according to your needs.",
            phoneNumber: "+919156015117",
            mailId: "wattamwargaj@gmail.com"
        }

    ]);
  return (
    <>
        <Navbar/>
        <div className='bodyText'>
            <h1 className='abouthead'>About Us</h1>
            <p className='abouttext'>Welcome to Studio_Ra.One, where creativity meets innovation! We are not just a business, but a bridge that transforms ideas into captivating visual stories. With a fusion of cutting-edge technology and artistic finesse, we craft 60-second masterpieces that encapsulate your brands essence. From the charming boutiques on the corner to the trendsetting makeup studios, we breathe life into your narrative, painting emotions that resonate with your audience. Our passion lies in weaving stories that define businesses, transcending mere marketing into a journey of connection. Elevate your brand with our bespoke videos, dynamic motion logos, and digital cards that tell your story in every pixel. Let us be your partners in creating experiences that stand as a beacon of uniqueness, driving your success beyond the ordinary.</p>
            <div>&nbsp;</div>
            <div>
                {/* {
                    aboutInfo.map((el, index) => {
                        return (
                            <AboutUsCard key={el.id} el={el}/>
                        )
                    })
                } */}
                
                <Carousel
                    className='carousel'
                    duration={3000}
                    autoPlay
                >
                    {
                        aboutInfo.map( (el, i) => <AboutUsCard key={el.id} el={el} /> )
                    }
                </Carousel>
            </div>
        </div>
        <Footer/>
    </>
  )
}
