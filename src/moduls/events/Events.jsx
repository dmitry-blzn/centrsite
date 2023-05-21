import React from 'react'
import './Events.scss'

import { EventCard } from '../../components/eventcard/EventCard'

function Events() {
  return (
    <div className='events'>
        <div className="events__column">
            <div className="events__column-head">
                <div className="events__column-head-title">
                    События
                </div>
                <div className="events__column-head-arrows">

                    <div className="events__column-head-arrows-back ab">
                        <div className="events__column-head-arrows-arrow1 arrow">
                            <img src={require('../../images/arrows/grayback.png')} alt="" />
                        </div>
                        <div className="events__column-head-arrows-arrow1-hover harrow">
                            <img src={require('../../images/arrows/whiteback.png')} alt="" />
                        </div>
                    </div>

                    <div className="events__column-head-arrows-right ar">
                        <div className="events__column-head-arrows-arrow2 arrow">
                            <img src={require('../../images/arrows/grayright.png')} alt="" />
                        </div>

                        <div className="events__column-head-arrows-arrow2-hover harrow">
                            <img src={require('../../images/arrows/whiteright.png')} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="events__column-cards">
                <EventCard className='eventcard' image={require('../../images/events/cinema.png')} date='20.04.2023' title='Событие' width='352px' height='206px' text='Дни доброго кино'/>
                <EventCard className='eventcard' image={require('../../images/events/firsttime.png')} date='12.04.2023' title='Событие' width='352px' height='206px' text='Время первых'/>
                <EventCard className='eventcard' image={require('../../images/events/true.png')} date='17.03.2023' title='Событие' width='352px' height='206px' text='Связь поколений. Голос правды.'/>
                <EventCard className='eventcard' image={require('../../images/events/war.png')} date='02.02.2023' title='Событие' width='352px' height='206px' text='80-летие Сталинградской битвы'/>
            </div>
        </div>
    </div>
  )
}

export {Events}
