import React from 'react'
import './Sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__row">

            <div className="sidebar__row-main bar">
                <div className="sidebar__row-main-icon icon">
                    <img src={require('../../images/sidebar/main.png')} alt="" />
                </div>
                <div className="sidebar__row-main-icon-red redicon">
                    <img src={require('../../images/sidebar/red/main.png')} alt="" />
                </div>
                <div className="sidebar__row-main-text text">
                    Главная
                </div>
            </div>

            <div className="sidebar__row-about bar">
                <div className="sidebar__row-about-icon icon">
                    <img src={require('../../images/sidebar/about.png')} alt="" />
                </div>
                <div className="sidebar__row-main-icon-red redicon">
                    <img src={require('../../images/sidebar/red/about.png')} alt="" />
                </div>
                <div className="sidebar__row-about-text text">
                    О Центре
                </div>
            </div>

            <div className="sidebar__row-notify bar">
                <div className="sidebar__row-notify-icon icon">
                    <img src={require('../../images/sidebar/notify.png')} alt="" />
                </div>
                <div className="sidebar__row-main-icon-red redicon">
                    <img src={require('../../images/sidebar/red/notify.png')} alt="" />
                </div>
                <div className="sidebar__row-notify-text text">
                    Объявления
                </div>
            </div>

            <div className="sidebar__row-scient bar">
                <div className="sidebar__row-scient-icon icon">
                    <img src={require('../../images/sidebar/scient.png')} alt="" />
                </div>
                <div className="sidebar__row-main-icon-red redicon">
                    <img src={require('../../images/sidebar/red/scient.png')} alt="" />
                </div>
                <div className="sidebar__row-scient-text text">
                    Научные работы
                </div>
            </div>

            <div className="sidebar__row-events bar">
                <div className="sidebar__row-events-icon icon">
                    <img src={require('../../images/sidebar/events.png')} alt="" />
                </div>
                <div className="sidebar__row-main-icon-red redicon">
                    <img src={require('../../images/sidebar/red/events.png')} alt="" />
                </div>
                <div className="sidebar__row-events-text text">
                    События
                </div>
            </div>

            <div className="sidebar__row-materials bar">
                <div className="sidebar__row-materials-icon icon">
                    <img src={require('../../images/sidebar/materials.png')} alt="" />
                </div>
                <div className="sidebar__row-main-icon-red redicon">
                    <img src={require('../../images/sidebar/red/materials.png')} alt="" />
                </div>
                <div className="sidebar__row-materials-text text">
                    Материалы
                </div>
            </div>

            <div className="sidebar__row-quiz bar">
                <div className="sidebar__row-quiz-icon icon">
                    <img src={require('../../images/sidebar/quiz.png')} alt="" />
                </div>
                <div className="sidebar__row-main-icon-red redicon">
                    <img src={require('../../images/sidebar/red/quiz.png')} alt="" />
                </div>
                <div className="sidebar__row-quiz-text text">
                    Викторины
                </div>
            </div>

        </div>
    </div>
  )
}

export {Sidebar}
