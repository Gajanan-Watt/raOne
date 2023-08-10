import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import Cards from './Cards'

export default function Services() {

    const [info, useInfo] = useState([
        {
            title: "Social Media Videos",
            bodyText1: "Social media videos: concise, engaging, diverse content across platforms. Shareable, visual storytelling, capturing attention, promoting trends, and fostering connections. Creativity, brevity, impact, and viral potential prevail.",
            bodyText2: "Social media videos revolutionise online communication. In 60 seconds, they captivate audiences through concise and engaging visual storytelling. Embracing diverse formats, from quick how-tos to entertaining challenges, they create connections and promote trends worldwide. With their shareable nature, videos harness the power of creativity, brevity, and emotional impact, propelling content to viral status and reshaping digital interactions."
        },
        {
            title: "Visual Branding",
            bodyText1: "Visual branding: crafting a brand's identity through impactful design elements. Logos, colors, typography, and imagery create a cohesive and memorable representation, reinforcing brand recognition and emotional connections.",
            bodyText2: "Visual branding is the art of creating a brand's visual identity through thoughtful design elements. This includes logos, color palettes, typography, and imagery that represent the brand's essence. By maintaining consistency across all touch-points, visual branding fosters brand recognition, trust, and emotional connections with the audience, leading to a powerful and lasting impact on consumers and the market."
        },
        {
            title: "Digital Designs & Content",
            bodyText1: "Digital design and content: Creating visually appealing and compelling online materials. This includes graphics, videos, and written content to engage audiences, deliver messages effectively, and enhance user experiences.",
            bodyText2: "Digital design and content intertwine to craft captivating online experiences. Skilfully blending aesthetics, usability, and messaging, designers create visually appealing graphics, videos, and interactive elements. Content writers complement these visuals with compelling text, telling stories and conveying information effectively. Together, they enhance user engagement, communicate brand identity, and leave a lasting impression on audiences across various digital platforms."
        },
        {
            title: "Digital Management",
            bodyText1: "Digital management involves overseeing and optimising an organisation's online presence and activities. It encompasses various aspects, such as social media, website, content, and online campaigns. Efficient digital management ensures a coherent strategy, tracks performance metrics, engages with the audience, and adapts to trends. By leveraging technology and data, businesses can achieve their goals, enhance customer experience, and stay competitive in the digital landscape.",
            bodyText2: "Digital management: coordinating and optimising online strategies, including social media, websites, and campaigns. Leveraging technology and data for effective engagement and achieving business goals."
        },
        {
            title: "Social Media Strategy",
            bodyText1: "Social media strategy: Planning and executing a targeted approach to maximise brand presence. Identifying goals, selecting platforms, creating engaging content, and analysing performance to foster meaningful connections with the audience.",
            bodyText2: "Social media strategy involves developing a well-defined plan to effectively leverage social platforms. By setting clear objectives, identifying target audiences, and choosing the right channels, businesses create engaging content that resonates with their followers. Regular monitoring and analysis of performance metrics enable adjustments to improve reach, engagement, and brand reputation, ultimately building lasting relationships and driving business success."
        },
        {
            title: "Location-Based Content",
            bodyText1: "Location-based content: Tailoring digital materials to specific geographic areas. Utilising geotags, location data, and localised information to deliver relevant and targeted experiences to users in particular locations.",
            bodyText2: "Location-based content delivers personalised digital experiences by tailoring information to users' geographical locations. Through geotags and location data, businesses offer location-specific offers, recommendations, and relevant updates, fostering stronger connections with their audience. This approach enhances user engagement, drives foot traffic to physical locations, and boosts overall customer satisfaction, as people feel more connected to the content and services that cater to their local needs."
        },
        {
            title: "Mass Marketing Videos",
            bodyText1: "Mass marketing videos: Broad-reaching, one-size-fits-all promotional content. Aimed at a large audience, these videos convey a unified message to raise brand awareness and drive consumer interest.",
            bodyText2: "Mass marketing videos are designed to reach a wide and diverse audience, delivering a consistent message about a product or brand. They employ broad appeal and simple messaging, aiming to create widespread brand awareness and attract potential customers from various demographics. While lacking personalised targeting, these videos can be cost-effective and beneficial for building initial interest and sparking curiosity among a large pool of potential consumers."
        },
        {
            title: "Custom Data Analysis",
            bodyText1: "Custom data analysis: Personalised data examination tailored to a business's unique requirements. Utilising advanced techniques to extract actionable insights for informed decision-making and achieving strategic objectives.",
            bodyText2: "Custom data analysis involves a personalised and flexible approach to handling data, tailored to address specific business questions and objectives. By employing specialised techniques, algorithms, and tools, analysts transform raw data into actionable insights, supporting informed decision-making. This custom approach ensures that businesses can extract maximum value from their data, optimise processes, identify trends, and stay ahead in a competitive landscape."
        },
        {
            title: "Data Consultation",
            bodyText1: "Data consultant: Expert advisor guiding businesses on data-related matters. They assess data strategies, offer insights, and implement solutions to optimise processes and achieve organisational goals.",
            bodyText2: "A data consultant is a seasoned professional who assists organisations in leveraging their data effectively. They assess data infrastructure, analyse processes, and identify opportunities for improvement. By providing strategic guidance, implementing data-driven solutions, and offering valuable insights, data consultants enable businesses to make informed decisions and maximise the value of their data, ultimately leading to improved efficiency, better decision-making, and increased competitiveness."
        },
        {
            title: "Website Development",
            bodyText1: "Website development: Crafting functional and visually appealing online platforms. Designing layouts, writing code, and integrating features to provide seamless user experiences and enable effective communication with audiences.",
            bodyText2: "Website development is the process of creating and building a functional and visually appealing online platform. It involves designing layouts, writing code, and integrating functionalities to ensure seamless user experiences. Website developers use various programming languages and frameworks to bring websites to life, catering to different business needs, and enabling effective communication and interaction with audiences on the internet."
        },
        {
            title: "Digital Marketing Reports",
            bodyText1: "Digital marketing reports: Comprehensive data analysis of marketing efforts. Key performance metrics, trends, and insights are presented to evaluate campaigns, measure ROI, and inform future strategies.",
            bodyText2: "Digital marketing reports are in-depth analyses that provide valuable insights into the performance of marketing campaigns. They encompass various key performance indicators (KPIs) like website traffic, conversion rates, social media engagement, and more. By evaluating these metrics, businesses can measure the effectiveness of their strategies, identify areas for improvement, and make data-driven decisions to optimise their digital marketing efforts for better results and returns on investment."
        },
        {
            title: "BI analyst",
            bodyText1: "BI analyst: Data expert analyzing information to aid business decisions. Utilizing tools for reports, dashboards, and visualizations, they uncover insights to optimize processes and drive organizational performance.",
            bodyText2: "A Business Intelligence (BI) analyst is a data expert responsible for analyzing complex datasets to extract meaningful insights. They utilize various tools and techniques to generate reports, dashboards, and visualizations, enabling businesses to make data-driven decisions. BI analysts interpret trends, identify opportunities and challenges, and play a crucial role in optimizing processes and enhancing overall performance across different aspects of the organization."
        },
    ])
  return (
    <>
        <Navbar/>
            {
                info.map((el, index) => {
                    return (
                        <>
                            <Cards key={index} title={el.title} bodyText1={el.bodyText1} bodyText2={el.bodyText2}/>
                        </>
                    )
                })
            }
        <Footer/>
    </>
  )
}
