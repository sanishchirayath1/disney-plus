import React, {useState, useEffect, useRef} from 'react'
import "./Slider.css"

function SliderItem({src}) {
    return (
        <li className="slider-item">
            <img src={src} alt=""/>
        </li>
    )
}

const sliderImages = ["/images/slider1.jpg", "/images/slider2.jpg", "/images/slider3.jpg", "/images/slider4.jpg"]


function Slider() {
    const [activeSlide, setActiveSlide] = useState(0)
    const delay = 3000
    const timeoutRef = useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }


    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            if (activeSlide === sliderImages.length - 1) {
                setActiveSlide(0)
            } else {
                setActiveSlide(activeSlide + 1)
            }
        }, delay)

        return () => {
            resetTimeout();
        }
    }, [activeSlide]);


    
    return (
        <>
            <ul className='slider' >
                <SliderItem src={sliderImages[activeSlide]}/>
                <div className='slider-dots'>
                    <span className={`slider-dot ${activeSlide === 0 && "active"}`}></span>
                    <span className={`slider-dot ${activeSlide === 1 && "active"}`}></span>
                    <span className={`slider-dot ${activeSlide === 2 && "active"}`}></span>
                    <span className={`slider-dot ${activeSlide === 3 && "active"}`}></span>
                </div>
                <span className='slider-prev slider-btn' onClick={() => {
                    if(activeSlide === 0) {
                        setActiveSlide(sliderImages.length - 1)
                    } else {
                        setActiveSlide(activeSlide - 1)
                    }
                }}>&#10094;</span>
                <span className='slider-next slider-btn' onClick={() => {
                    if(activeSlide === sliderImages.length - 1) {
                        setActiveSlide(0)
                    } else {
                        setActiveSlide(activeSlide + 1)
                    }
                }}>&#10095;</span>
              
            </ul>
           
            </>
        
    )
}

export default Slider
