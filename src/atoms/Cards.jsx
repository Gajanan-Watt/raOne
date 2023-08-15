import React from 'react'
import "./Cards.css"

export default function Cards(props) {
  return (
    <>
        <div className='card_container'>
            <h3 className='title'>{props.title}</h3>
            <ul>
                <li className='bodyText'>{props.bodyText}</li>
                {/* <li className='bodyText'>{props.bodyText2}</li> */}
            </ul>
        </div>
        <div>&nbsp;</div>
    </>
  )
}
