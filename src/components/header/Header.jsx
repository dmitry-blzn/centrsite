import React from 'react'
import './Header.scss'

function Header(props) {

    const {setMenu = Function.prototype} = props;

  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__row">

                <div className="header__row-logo">

                    <div className="header__row-logo-image">
                        <img src={require('../../images/logo.png')} alt="" />
                    </div>

                    <div className="header__row-logo-text">
                        «Центр гражданско-патриотического 
                        <p>воспитания обучающихся НИУ «БелГУ»</p> 
                    </div>

                </div>

                <div className="header__row-actions">

                    <div className="header__row-actions-vk">
                        <img src={require('../../images/vk.png')} alt="" />
                    </div>

                    <div className="header__row-actions-search">

                        <div className="header__row-actions-search-icon">
                            <img src={require('../../images/search.png')} alt="" />
                        </div>

                        <div className="header__row-actions-search-text">
                            Поиск
                        </div>

                    </div>

                    <div className="header__row-actions-profile">
                        <img src={require('../../images/profile.png')} alt="" />
                    </div>

                </div>
            </div>
            <div className="header__row-adaptive">
                <div className="header__row-logo-adaptive">

                    <div className="header__row-logo-image-adaptive">
                        <img src={require('../../images/mini-logo.png')} alt="" />
                    </div>

                    <div className="header__row-logo-text-adaptive">
                        «Центр гражданско-
                        <p>патриотического воспитания</p> 
                        <p>обучающихся НИУ «БелГУ»</p> 
                    </div>

                </div>
                <div className="header__row-actions-adaptive">

                    <div className="header__row-actions-search">

                        <div className="header__row-actions-search-icon">
                            <img src={require('../../images/search.png')} alt="" />
                        </div>

                    </div>

                    <div className="header__row-actions-menu" onClick={() => setMenu(true)}>
                        <img src={require('../../images/open-burger.png')} alt="" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export {Header}