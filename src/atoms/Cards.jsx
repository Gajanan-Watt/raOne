import React from 'react'
import "./Cards.css"

export default function Cards(props) {
  return (
    <>
        <div className='card_container'>
            <p className='title'>{props.title}</p>
            <ul className='unorderList'>
                <li className='bodyText'>{props.bodyText}</li>
                {/* <li className='bodyText'>{props.bodyText2}</li> */}
            </ul>
        </div>
        <div>&nbsp;</div>
    </>
  )
}
