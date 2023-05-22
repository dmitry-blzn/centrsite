import React from 'react'
import './Card.scss'

//Компонент карточки, аналогичный остальным компонентам с постфиксом Card
//Через props принимает переданные картинку, описание, тип контента и размер, отрисовывает карточку в соответствии с описанными стилями
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
