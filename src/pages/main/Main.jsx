import React from 'react'
import './Main.scss'

import { Header } from '../../components/header/Header'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Dates } from '../../moduls/dates/Dates'

function Main() {
  return (
    <div className='main'>
        <Header/>
        <Sidebar/>
        <Dates/>
    </div>
  )
}

export {Main}
