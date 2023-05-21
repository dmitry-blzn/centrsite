import React from 'react'

import { BigEventCard } from '../../components/bigeventcard/BigEventCard'

function BigEvents() {
  return (
    <div className='dates'>
        <div className="dates__column">
            <div className="dates__column-title">
                События
            </div>
            <div className="dates__column-cards">
                <BigEventCard className='eventcard' image={require('../../images/eventpage/winners.png')} date='17.05.2023' title='Событие' width='489px' height='266px' text='Студенты НИУ «БелГУ» – победители историко-патриотической игры «Забвению не подлежит!»'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/experts.png')} date='14.05.2023' title='Событие' width='352px' height='206px' text='Эксперты рассказали студентам, как реализовать исторический проект в супер новых медиа'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/aliens.png')} date='08.05.2023' title='Событие' width='352px' height='206px' text='Иностранные студенты узнали о ключевых событиях Великой Отечественной'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/prepare.png')} date='05.05.2023' title='Событие' width='352px' height='206px' text='Белгородский госуниверситет готовится к празднованию Дня Победы'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/meet.png')} date='05.05.2023' title='Событие' width='352px' height='206px' text='На Общественном совете обсуждены важные для вуза и региона вопросы'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/duga.png')} date='03.05.2023' title='Событие' width='352px' height='206px' text='В Белгородском госуниверситете состоялся патриотический час «Заря Победы – Курская дуга»'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/actions.png')} date='30.04.2023' title='Событие' width='352px' height='206px' text='В НИУ «БелГУ» прошла акция «Поклонись белым журавлям – душам павших героев»'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/history.png')} date='29.04.2023' title='Событие' width='352px' height='206px' text='Студенты НИУ «БелГУ» узнали об истории женского образования в России'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/wonday.png')} date='28.04.2023' title='Событие' width='352px' height='206px' text='Белгородский госуниверситет присоединился к написанию Диктанта Победы'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/city.png')} date='27.04.2023' title='Событие' width='352px' height='206px' text='НИУ «БелГУ» присоединился к мероприятиям в честь присвоения Белгороду звания Города воинской славы'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/cinema.png')} date='25.04.2023' title='Событие' width='352px' height='206px' text='НИУ «БелГУ» присоединился к Всероссийской акции «Дни доброго кино»'/>
                <BigEventCard className='eventcard' image={require('../../images/eventpage/withoutdate.png')} date='20.04.2023' title='Событие' width='352px' height='206px' text='Белгородский госуниверситет присоединился к Всероссийской акции «Без срока давности»'/>
                
            </div>
            <div className="dates__column-button">
                <button className='dates__column-button-b'>Показать ещё</button>
            </div>
        </div>
        
    </div>
  )
}

export {BigEvents}