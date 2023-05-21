import React from 'react'
import './Matcard.scss'

function Matcard(props) {

    const {image, title, text, width, height} = props

  return (
    <div className='matcard' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', width: '362px', height: '486px'}}>

    <div className="matcard__info">
        <div className="matcard__info-separator">

        </div>
        <div className="matcard__info-title">
            {text}
        </div>
    </div>
</div>
  )
}

export {Matcard}
