import React from 'react'
import Slider from './Slider'
import "./Home.css"
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
      
    return (
        <div>
            <main className="home">
                <Slider />
                <Viewers />
                <Movies />
            </main>
        </div>
    )
}

export default Home
