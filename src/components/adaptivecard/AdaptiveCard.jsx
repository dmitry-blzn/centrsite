import React from 'react'
import './AdaptiveCard.scss'

function AdaptiveCard(props) {

    const {image, title, text, width, height} = props

    let flag = require('../../images/flag.png')

  return (
    <div className='card' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', width: '280px', height: '400px'}}>
        
        <div className="card__shell">
            <div className="card__title">
                {title}
            </div>
        </div>

        <div className="card__text-adaptive">
            {text}
        </div>
    </div>
  )
}

export {AdaptiveCard}