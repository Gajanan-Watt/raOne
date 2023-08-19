import React from 'react'
import "./ProjectsCard.css"

export default function ProjectsCard(props) {
  return (
    <>
        <div className='card_container'>
            <ul style={{listStyleType: 'none'}}>
                <li className='projectDescription'>{props.projectDescription}</li>
                {/* <li className='bodyText'>{props.bodyText2}</li> */}
            </ul>
            <h3 className='client'>{props.client}</h3>
        </div>
        <div>&nbsp;</div>
    </>
  )
}
