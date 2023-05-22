import React from 'react'
import './Dates.scss'
import { Card } from '../../components/card/Card'
import { AdaptiveCard } from '../../components/adaptivecard/AdaptiveCard'

//Компанонет, отображающий Памятные даты на странице. Используются компоненты-шаблоны Card и AdaptiveCard. Они принимают картинку, описание, тип контента и размер. После этого
//Происходит отрисовка карточки из их компонентов. 
function Dates() {
  return (
    <div className='dates'>
        <div className="dates__column">
            <div className="dates__column-title">
                Памятные даты
            </div>
            <div className="dates__column-cards">
                <Card className='card' image={require('../../images/cards/ladojskiy.png')} title='Статья' width='489px' height='266px' text='5 Мая 1942 года – начало сооружения Ладожского трубопровода'/>
                <Card className='card' image={require('../../images/cards/wonday.png')} title='Статья' width='489px' height='266px' text='День Победы!'/>
                <Card className='card' image={require('../../images/cards/Sevastopol.png')} title='Статья' width='489px' height='266px' text='9 Мая 1944 года – Освобождение Севастополя'/>
                <Card className='card' image={require('../../images/cards/partizane.png')} title='Статья' width='489px' height='266px' text='Подвиг партизанского разведчика Марата Казея'/>
                <Card className='card' image={require('../../images/cards/praga.png')} title='Статья' width='489px' height='266px' text='11 Мая 1945 года – Завершилась пражская операция'/>
                <Card className='card' image={require('../../images/cards/operation.png')} title='Статья' width='489px' height='266px' text='12 Мая 1944 года – Завершилась Крымская наступательная операция.'/>
            </div>
            <div className="dates__column-button">
                <button className='dates__column-button-b'>Показать ещё</button>
            </div>

            <div className="dates__column-cards-adaptive">
                <AdaptiveCard className='card' image={require('../../images/adaptive/adaptiveData.png')} title='Статья' width='489px' height='266px' text='5 Мая 1942 года – начало сооружения Ладожского трубопровода'/>
                <AdaptiveCard className='card' image={require('../../images/adaptive/adaptiveData.png')} title='Статья' width='489px' height='266px' text='День Победы!'/>
                <AdaptiveCard className='card' image={require('../../images/adaptive/adaptiveData.png')} title='Статья' width='489px' height='266px' text='9 Мая 1944 года – Освобождение Севастополя'/>
                <AdaptiveCard className='card' image={require('../../images/adaptive/adaptiveData.png')} title='Статья' width='489px' height='266px' text='Подвиг партизанского разведчика Марата Казея'/>
                <AdaptiveCard className='card' image={require('../../images/adaptive/adaptiveData.png')} title='Статья' width='489px' height='266px' text='11 Мая 1945 года – Завершилась пражская операция'/>
                <AdaptiveCard className='card' image={require('../../images/adaptive/adaptiveData.png')} title='Статья' width='489px' height='266px' text='12 Мая 1944 года – Завершилась Крымская наступательная операция.'/>
            </div>
        </div>
        
    </div>
  )
}

export {Dates}
