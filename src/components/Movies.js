import React from 'react'
import "./Movies.css"
import data from "../moviesData.js"
import {Link} from 'react-router-dom'



function Movie({ src, id }) {
    return (
        <Link to={`/details/${id}`}>
            <div className='movie'>
                <img src={src} alt="" />
            </div>
        </Link>
    )
}

function Movies() {

    const recommended = data.movies.filter(movie => movie.type === "recommend")
    const newMovies = data.movies.filter(movie => movie.type === "new")
    const trending = data.movies.filter(movie => movie.type === "trending")
    const originals = data.movies.filter(movie => movie.type === "original")
    return (
        <>
            <h4>Recommended for you</h4>
            <div className='movies-container'>
                {recommended.map(movie => (
                    <Movie key={movie.id} src={movie.cardImg} id={movie.id}/>
                ))}
            </div>
            <h4>New to Disney+</h4>
            <div className='movies-container'>
                {newMovies.map(movie => (
                    <Movie key={movie.id} src={movie.cardImg} id={movie.id}/>
                ))}
            </div>
            <h4>Trending</h4>
            <div className='movies-container'>
                {trending.map(movie => (
                    <Movie key={movie.id} src={movie.cardImg} id={movie.id}/>
                ))}
            </div>
            <h4>Originals</h4>
            <div className='movies-container'>
                {originals.map(movie => (
                    <Movie key={movie.id} src={movie.cardImg} id={movie.id}/>
                ))}
            </div>
            
        </>
        
    )
}

export default Movies
