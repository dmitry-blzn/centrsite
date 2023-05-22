import React from 'react'
import './Main.scss'

//подключение управления состояниями и отслеживания жизненного цикла компонентов
import { useState } from 'react'
import { useEffect } from 'react'

//подключение компонентов
import { Header } from '../../components/header/Header'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Dates } from '../../moduls/dates/Dates'
import { Events } from '../../moduls/events/Events'
import { Materials } from '../../moduls/materials/Materials'
import { Footer } from '../../components/footer/Footer'

//функция отрисовки главной страницы
function Main() {

  useEffect(() => {
    const currentWidth = window.innerWidth

    setWidth(currentWidth)
    console.log(width)
  }, [])

  const [menu, setMenu] = useState(false)
  const [width, setWidth] = useState(1920)

  
  const setAdaptiveMenu = (state) => {
    setMenu(state)
    console.log(menu)
  }

  

  return (
    <div className='main'>
        <Header setMenu={setAdaptiveMenu} menu={menu}/>
        <Sidebar setMenu={setAdaptiveMenu} menu={menu}/>
        <Dates/>
        <Events/>
        {!(width <= 500) && <Materials/>}
        <Footer/>
    </div>
  )
}

export {Main}
