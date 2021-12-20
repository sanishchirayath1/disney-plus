import React from 'react'
import "./Details.css"
import {useParams} from 'react-router-dom'
import data from "../moviesData.js"

function Details() {
    const {id} = useParams()
    const movie = data.movies.filter(movie => movie.id === parseInt(id))[0]
    console.log(movie)
  
    return (
        <div className='details-container'>
            <div className='details-background'>
                <img src={movie.backgroundImg} alt=""/>
            </div>
            <div className='details-title-img'>
               <img src={movie.titleImg} alt=""/> 
            </div>
            <div className='details-controls-container'>
                <button className='btn btn-white'><img src="/images/play-icon-black.png" alt=""/><span>PLAY</span></button>
                <button className='btn'><img src="/images/play-icon-white.png"alt="" /><span>TRAILER</span></button>
                <button className='btn btn-round '><span>+</span></button>
                <button className='btn btn-round'><img src="/images/group-icon.png" alt=""/></button>
            </div>
            <div className='details-subtitle'>
                <span>{movie.subTitle}</span>
                <p>  {movie.description}</p>
            </div>
            <div className='details-shadow'>

            </div>
        </div>
    )
}

export default Details
