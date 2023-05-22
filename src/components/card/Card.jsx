import React from 'react'
import './Card.scss'

function Card(props) {

    const {image, title, text, width, height} = props

    let flag = require('../../images/flag.png')

  return (
    <div className='card' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', width: '489px', height: '266px'}}>
        
        <div className="card__shell-card">
            <div className="card__title">
                {title}
            </div>
        </div>

        <div className="card__text">
            {text}
        </div>
    </div>
  )
}

export {Card}
