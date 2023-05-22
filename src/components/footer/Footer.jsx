import React from 'react'
import './Footer.scss'

//компонент подвала без особенностей 
function Footer() {
  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="footer__row">
                <div className="footer__row-column1">
                    <div className="footer__row-column1-logo">
                        <div className="footer__row-column1-logo-img">
                            <img src={require('../../images/biglogo.png')} alt="" />
                        </div>
                        <div className="footer__row-column1-logo-img-adaptive">
                            <img src={require('../../images/logo.png')} alt="" />
                        </div>
                        <div className="footer__row-column1-logo-text">
                            «Центр гражданско-
                            <p>патриотического воспитания</p> 
                            <p>обучающихся НИУ «БелГУ»</p> 
                        </div>
                    </div>
                    <div className="footer__row-column1-support">
                        <p className='footer-title'>Поддержка</p> 
                        <p className='sup1 maintext'>По всем вопросам обращаться:</p>
                        <p className='sup2 subtext'>1390155@bsu.edu.ru</p>
                        <p className='sup1 maintext'>Разработка и техническая поддержка:</p>
                        <p className='sup2 subtext'>E-mail: dmitry.blzn@mail.ru</p>
                    </div>
                </div>
                <div className="footer__row-column2">
                    <div className="footer__row-column2-contacts">
                        <p className='footer-title'>Контакты</p> 
                        <p className='maintext'>Адрес:</p>
                        <p className='subtext'>г. Белгород, ул. Победы, 85, корп. 15, к.2-22</p>
                        <p className='maintext'>Телефон:</p>
                        <p className='subtext'>(4722) 24-54-49</p>
                        <p className='maintext'>Директор:</p>
                        <p className='lowspace1 subtext'>Кузнецова Инна Вячеславовна</p>
                        <p className='subtext'>E-mail: Kuznetsova_IV@bsu.edu.ru</p>
                        <p className='maintext'>Режим работы:</p>
                        <p className='lowspace1 subtext'>Понедельник – пятница с 9.00 до 18.00</p>
                        <p className='subtext'>Перерыв на обед с 13.00 до 14.00</p>
                    </div>
                    <div className="footer__row-column2-contacts-adaptive">
                        <p className='footer-title'>Контакты</p> 

                        <p className='maintext'>Телефон:</p>
                        <p className='subtext'>(4722) 24-54-49</p>

                        <p className='maintext'>Директор:</p>
                        <p className='lowspace1 subtext'>Кузнецова Инна Вячеславовна</p>
                        <p className='subtext'>E-mail: Kuznetsova_IV@bsu.edu.ru</p>

                        <p className='maintext'>Режим работы:</p>
                        <p className='lowspace1 subtext'>Понедельник – пятница с 9.00 до 18.00</p>
                        <p className='subtext'>Перерыв на обед с 13.00 до 14.00</p>

                        <p className='maintext'>Адрес:</p>
                        <p className='subtext'>г. Белгород, ул. Победы, 85, корп. 15, к.2-22</p>
                        
                    </div>
                    <div className="footer__row-column2-map">
                        <iframe className='map' title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae77ba9aa76c650d82213c8b900e9c7d1322890d9b106962e2b247376ae1cb96c&amp;source=constructor" width="489" height="393" frameborder="0"></iframe>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export {Footer}
