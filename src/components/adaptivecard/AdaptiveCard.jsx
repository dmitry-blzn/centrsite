import React from 'react'
import './AdaptiveCard.scss'

function AdaptiveCard(props) {

    const {image, title, text, width, height} = props

    let flag = require('../../images/flag.png')

  return (
    <div className='card-adaptive' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat'}}>
        
        <div className="card__shell-adaptive">
            <div className="card__title-adaptive">
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