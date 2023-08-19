import React from 'react'
import "./Projects.css"
import Navbar from '../atoms/Navbar'
import { Footer } from '../atoms/Footer'
import ProjectsCard from '../atoms/ProjectsCard';
// import Carousel from 'react-material-ui-carousel'
// import Items from './Items'



export default function Projects() {
    var items = [
        {
          client: "Oyster Clothing (London, United Kingdom)",
          projectDescription: "We collaborated with Oyster Clothing, a unique business in the UK, offering a variety of clothing with a focus on hoodies and cool jackets. By conducting SWOT analysis and understanding their vision, we delivered captivating product promotional content, website UX design, and an engaging 45-second marketing video to effectively reach their existing and potential customers."
        },
        {
          client: "Bajarang Textiles (Nanded, India)",
          projectDescription: "Bajarang Textiles, a wholesale market business, sought our expertise in digital marketing and content creation. We provided them with unique product promotional content, logo, motion graphics, and custom-programmed digital cards to elevate their digital presence and engage customers on platforms like Instagram and Facebook."
        },
        {
          client: "PhotoExpress (Hyderabad, India)",
          projectDescription: "PhotoExpress, a corporate gifts and accessories business, relied on us to deliver exceptional product promotional content, logos, motion graphics, and digital marketing solutions to enhance their brand recognition and online engagement."
        },
        {
            client: "Fitness Ladder (Nanded, India)",
            projectDescription: "As fitness enthusiasts, we shared the passion of Fitness Ladder, a prominent fitness centre. Through a powerful 40-second video shoot capturing the essence of their dedication to clients' well-being, we conveyed their message effectively to potential customers."
        },
        {
            client: "Beyond the Beauty, Makeup Studio (Nanded, India)",
            projectDescription: "With Beyond the Beauty, we crafted unique product promotional content, logos, motion graphics, and strategic digital marketing plans. Additionally, we implemented an efficient customer data collection form to keep customers informed about new products and offers."
        },
        {
            client: "Score English Tutorial (Nanded, India)",
            projectDescription: "Working closely with Score English Tutorial, we are dedicated to helping students prepare for Cambridge English exams and spoken English classes. By creating interactive content and developing a customised website, we aim to enhance student engagement and provide effective digital marketing strategies."
          }
      ];
    return (
        <>
            <Navbar />
            <div className='bodyText'>
                <h3>Welcome to Studio_RA.ONE, your ultimate digital partner!</h3>
                <div>&nbsp;</div>
                {
                    items.map((el, index) => {
                        return (
                            <>
                                <ProjectsCard key={index} client={el.client} projectDescription={el.projectDescription} />
                            </>
                        )
                    })
                }
                {/* <Carousel
                    className='carousel'
                    duration={3000}
                    autoPlay
                >
                    {
                        items.map( (item, i) => <Items key={i} item={item} /> )
                    }
                </Carousel> */}
                <div>&nbsp;</div>

                <p>At Studio_RA.ONE, we take pride in our diverse portfolio, delivering exceptional results to small, medium, and micro businesses, helping them leave a lasting digital footprint.</p>
                <div>&nbsp;</div>
                
            </div>
            <Footer />
        </>
    )
}
