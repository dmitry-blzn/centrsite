import React from 'react'
import './AboutPages.scss'

import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Center } from '../../moduls/center/Center'

function AboutPages() {
  return (
    <div className="aboutpage">
		<Header/>
		<Sidebar/>
		<Center/>
		<Footer/>
	</div>
  )
}

export {AboutPages}