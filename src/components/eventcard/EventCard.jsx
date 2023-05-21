import React from 'react'
import './EventCard.scss'

function EventCard(props) {

    const {image, title, text, width, height, date} = props

    let flag = require('../../images/flag.png')

  return (
    <div className='eventcard' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', width: '362px', height: '206px'}}>
        
        <div className="card__shell">
            <div className="card__title-event">
                {title}
            </div>
        </div>

        <div className="card__info">
            <div className="card__info-date">
                {date}
            </div>
            <div className="card__info-separator">

            </div>
            <div className="card__info-title">
                {text}
            </div>
        </div>
    </div>
  )
}

export {EventCard}