import { Button, Paper } from '@mui/material'
import React from 'react'
import "./Items.css"

export default function Items(props) {
    return (
        <div className='paper'>
            <div>
                <p>{props.item.projectDescription}</p>
                <h3>Clients - {props.item.client}</h3>
            </div>
        </div>
    )
}


