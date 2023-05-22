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

  // Каждый раз при создании компонента на странице, а также при обновлении страницы будет считываться размер окна браузера
  useEffect(() => {
    const currentWidth = window.innerWidth

    // И записываться в состояние, отвечающее за размер окна
    setWidth(currentWidth)
  }, [])

  //состояние адаптивного меню - нужно его открывать, или нет
  const [menu, setMenu] = useState(false)
  //состояние с размером окна браузера
  const [width, setWidth] = useState(1920)

  //функция, регулирующая состояние адаптивного меню, но можно было обойтись и без неё - оставил в качестве примера
  const setAdaptiveMenu = (state) => {
    setMenu(state)
  }

  

  return (
    //Вызов компонентов, в sidebar и header передаём состояние меню, 
    //поскольку они с этим состоянием работают. 
    <div className='main'>
        <Header setMenu={setAdaptiveMenu} menu={menu}/>
        <Sidebar setMenu={setAdaptiveMenu} menu={menu}/>
        <Dates/>
        <Events/>
        <Materials/>
        <Footer/>
    </div>
  )
}

export {Main}
