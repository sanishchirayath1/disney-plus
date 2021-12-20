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
        <div className="slider-wrapper-container">
            <div className='slider-wrapper'>
                <ul className='slider' style={{ transform: `translate3d(${-activeSlide * 100}%, 0, 0)` }}>
                    {sliderImages.map((src, index) => (
                        <SliderItem src={src} key={index} />
                    ))}
                    {/* <SliderItem src={sliderImages[activeSlide]}/> */}          
                </ul>    
            </div>
            <div className="slider-dots">
                {sliderImages.map((src, index) => (
                    <span
                        key={index}
                        className={`slider-dot ${activeSlide === index ? "active" : ""}`}
                        onClick={() => setActiveSlide(index)}
                    />
                ))}
            </div>
            <span 
                className='slider-prev slider-btn' 
                onClick={() => {
                    if(activeSlide === 0) {
                        setActiveSlide(sliderImages.length - 1)
                    } else {
                        setActiveSlide(activeSlide - 1)
                    }
                }}>&#10094;
            </span>
            <span 
                className='slider-next slider-btn' 
                onClick={() => {
                    if(activeSlide === sliderImages.length - 1) {
                        setActiveSlide(0)
                    } else {
                        setActiveSlide(activeSlide + 1)
                    }
                }}>&#10095;
            </span>
        </div>
        
    )
}

export default Slider
