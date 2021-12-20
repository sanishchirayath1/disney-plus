import React from 'react'
import "./Movies.css"

function Movie() {
    return (
        <div className='movie'>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
        </div>
    )
}

function Movies() {
    return (

        <>
            <h4>Recommended for you</h4>
            <div className='movies-container'>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
            
        </>
        
    )
}

export default Movies
