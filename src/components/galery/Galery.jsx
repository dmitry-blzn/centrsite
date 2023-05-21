import React from 'react'
import './Galery.scss'

function Galery() {
  return (
    <div className='galery'>
        <div className="galery__column">
            <div className="galery__column-title">
                Фотогалерея
            </div>
            <div className="galery__column-images">
                <img className='galery__column-images-image' src={require('../../images/galery1.png')} alt="" />
                <img className='galery__column-images-image' src={require('../../images/galery2.png')} alt="" />
            </div>
            <div className="galery__column-selector">

                <div className="galery__column-selector-back">
                    <img className="default" src={require('../../images/galeryback.png')} alt="" />
                    <img className="white" src={require('../../images/arrows/whiteback.png')} alt="" />
                </div>

                <img className='galerypoint1' src={require('../../images/galeryhide.png')} alt="" />
                <img className='galerypoint' src={require('../../images/galerypoint.png')} alt="" />
                <img className='galerypoint' src={require('../../images/galeryhide.png')} alt="" />
                <img className='galerypoint' src={require('../../images/galeryhide.png')} alt="" />
                <img className='galerypoint' src={require('../../images/galeryhide.png')} alt="" />
                <img className='galerypoint' src={require('../../images/galeryhide.png')} alt="" />
                <img className='galerypoint' src={require('../../images/galeryhide.png')} alt="" />
                <img className='galerypoint8' src={require('../../images/galeryhide.png')} alt="" />

                <div className="galery__column-selector-right">
                    <img className="default" src={require('../../images/galeryright.png')} alt="" />
                    <img className="white" src={require('../../images/arrows/whiteright.png')} alt="" />
                </div>

            </div>

            <div className="galery__column-separator">

            </div>
            <div className="galery__column-info">
                <div className="galery__column-info-watches">
                    <img src={require('../../images/watches.png')} alt="" />
                    <p>254</p> 
                </div>
                <div className="galery__column-info-comments">
                    <img src={require('../../images/comments.png')} alt="" />
                    <p>12</p> 
                </div>
                <div className="galery__column-info-date">
                    <p>17.05.2023</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export {Galery}
