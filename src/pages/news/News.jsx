import React from 'react'
import './News.scss'

import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { NewsList } from '../../moduls/newslist/NewsList'

function News() {
  return (
    <div>
		<Header/>
		<Sidebar/>
		<NewsList/>
		<Footer/>
    </div>
  )
}

export {News}