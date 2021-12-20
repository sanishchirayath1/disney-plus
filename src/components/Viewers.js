import React from 'react'
import "./Viewers.css"

const viewers = ["/images/viewers-disney.png", "/images/viewers-marvel.png", "/images/viewers-national.png", "/images/viewers-pixar.png", "/images/viewers-starwars.png"]

function Viewer({src}) {
    return (
        <div className='viewer'>
            <img src={src} alt="" />
        </div>
    )
}

const viewerEls = viewers.map(viewerImg => <Viewer key={viewerImg} src={viewerImg} />)

function Viewers() {
    return (
        <div className='viewer-wrapper'>
            {viewerEls}
        </div>
    )
}

export default Viewers
