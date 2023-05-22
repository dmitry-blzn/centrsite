import React from 'react'
import './BigEventCard.scss'

function BigEventCard(props) {

    const {image, title, text, width, height, date} = props

    let flag = require('../../images/flag.png')

  return (
    <div className='bigeventcard' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', width: '489px', height: '266px'}}>
        
        <div className="card__shell-event-m">
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

export {BigEventCard}