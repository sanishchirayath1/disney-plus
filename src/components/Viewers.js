import React from 'react'
import "./Viewers.css"
import styled from "styled-components";

const viewers = ["disney", "marvel", "national", "pixar","starwars"]

function Viewer({src}) {
    return (
        <Wrap>
            <img src={`/images/viewers-${src}.png`} alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src={`/videos/${src}.mp4`} type="video/mp4" />
            </video>
        </Wrap>
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

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;