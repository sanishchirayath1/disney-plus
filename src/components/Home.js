import React from 'react'
import Slider from './Slider'
import "./Home.css"
import Viewers from './Viewers'

function Home() {
    return (
        <div>
            <main className="home">
                <Slider />
                <Viewers />
            </main>
        </div>
    )
}

export default Home
