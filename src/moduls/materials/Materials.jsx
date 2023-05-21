import React from 'react'
import './Materials.scss'

import { Matcard } from '../../components/matcard/Matcard'

function Materials() {
  return (
    <div className='materials'>
    <div className="materials__column">
        <div className="materials__column-head">
            <div className="materials__column-head-title">
                Материалы
            </div>
            <div className="materials__column-head-arrows">

                Смотреть все

            </div>
        </div>
        <div className="materials__column-cards">
            <Matcard className='eventcard' image={require('../../images/materials/front.png')} date='20.04.2023' title='Событие' width='352px' height='206px' text='Знакомство с периодическим изданием «Белгородская правда»'/>
            <Matcard className='eventcard' image={require('../../images/materials/heroes.png')} date='12.04.2023' title='Событие' width='352px' height='206px' text='Виртуальная фотовыставка "Героические страницы города Белгорода"'/>
            <Matcard className='eventcard' image={require('../../images/materials/igor.png')} date='17.03.2023' title='Событие' width='352px' height='206px' text='А. Е. Смирнов "Слово о полку Игореве"'/>
            <Matcard className='eventcard' image={require('../../images/materials/history.png')} date='02.02.2023' title='Событие' width='352px' height='206px' text='Ш. М. Мунчаев "История России"'/>
        </div>
    </div>
</div>
  )
}

export {Materials}
