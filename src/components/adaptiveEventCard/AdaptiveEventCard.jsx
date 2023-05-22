import React from 'react'
import './AdaptiveEventCard.scss'

function AdaptiveEventCard(props) {

    const {image, title, text, width, height, date} = props

    let flag = require('../../images/flag.png')

  return (
    <div className='eventcard-adaptive' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat'}}>
        
        <div className="card__shell">
            <div className="card__title-event">
                {title}
            </div>
        </div>

        <div className="card__info-adaptive">
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

export {AdaptiveEventCard}