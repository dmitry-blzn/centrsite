import React from 'react'
import './Main.scss'

import { Header } from '../../components/header/Header'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Dates } from '../../moduls/dates/Dates'
import { Events } from '../../moduls/events/Events'
import { Materials } from '../../moduls/materials/Materials'
import { Footer } from '../../components/footer/Footer'

function Main() {
  return (
    <div className='main'>
        <Header/>
        <Sidebar/>
        <Dates/>
        <Events/>
        <Materials/>
        <Footer/>
    </div>
  )
}

export {Main}
