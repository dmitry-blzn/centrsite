import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {

    //получаем функцию изменения состояния меню из родительского компонента
    const {setMenu = Function.prototype} = props;

    //создаём состояние отображения строки поиска
    const [search, setSearch] = useState(false)

    //отображаем содержание header-а, при помощи "Link to='...' регулируем переходы по ссылкам" 
    //строку поиска рендерим условно, в зависимости от состояния: const [search, setSearch] = useState(false)
  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__row">

                <div className="header__row-logo">

                    <div className="header__row-logo-image">
                        <Link to='/'><img src={require('../../images/logo.png')} alt="" /></Link> 
                    </div>

                    <div className="header__row-logo-text">
                        «Центр гражданско-патриотического 
                        <p>воспитания обучающихся НИУ «БелГУ»</p> 
                    </div>

                </div>

                <div className="header__row-actions">

                    <div className="header__row-actions-vk">
                        <a href="https://vk.com/public198278005"><img src={require('../../images/vk.png')} alt="" /></a> 
                    </div>

                    <div className="header__row-actions-search">

                        <div className="header__row-actions-search-icon" onClick={() => setSearch(true)}>
                            <img src={require('../../images/search.png')} alt="" />
                        </div>

                        { search &&
                        <>
                            <div className="header__row-actions-search-line">
                                <input className='search' type="text" />
                            </div>
                            <div className="header__row-actions-search-closeline" onClick={() => setSearch(false)}>
                                <img src={require('../../images/adaptive/burger-open.png')} alt="" />
                            </div>
                        </>
                        }

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