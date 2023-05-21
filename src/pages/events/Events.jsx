import React from 'react'
import './Events.scss'

import { Header } from '../../components/header/Header'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Footer } from '../../components/footer/Footer'
import { BigEvents } from '../../moduls/bigevents/BigEvents'

function Events() {
  return (
    <div className='eventspage'>
		<Header/>
		<Sidebar/>
		<BigEvents/>
		<Footer/>
    </div>
  )
}

export {Events}
