import React from 'react'
import "./Details.css"

function Details() {
    return (
        <div className='details-container'>
            <div className='details-background'>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt=""/>
            </div>
            <div className='details-title-img'>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt=""/> 
            </div>
            <div className='details-controls-container'>
                <button className='btn btn-white'><img src="/images/play-icon-black.png" alt=""/><span>PLAY</span></button>
                <button className='btn'><img src="/images/play-icon-white.png"alt="" /><span>TRAILER</span></button>
                <button className='btn btn-round '><span>+</span></button>
                <button className='btn btn-round'><img src="/images/group-icon.png" alt=""/></button>
            </div>
            <div className='details-subtitle'>
                <span>The Lion King : 2019 : Animation</span>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus optio, ex provident voluptatem sint aperiam in cupiditate esse quisquam ratione voluptate! Adipisci consectetur atque culpa incidunt beatae autem id? </p>
            </div>
            <div className='details-shadow'>

            </div>
        </div>
    )
}

export default Details
