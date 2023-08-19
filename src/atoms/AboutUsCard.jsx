import React from 'react'
import "./AboutUsCard.css"

export default function AboutUsCard(props) {
  return (
    <>
        <div className='card_container'>
            <p className='title'>{props.el.name}</p>
            <image src={props.el.profile}/>
            <ul className='unorderList'>
                <li className='bodyText'>{props.el.desc}</li>
            </ul>
            <p>{props.el.phoneNumber}</p>
            <p>{props.el.mailId}</p>
        </div>
        <div>&nbsp;</div>
    </>
  )
}
