import React, { useEffect, useState } from "react";
import '../styles/carousel.css';

import WhiteLeft from '../assets/BrancoEsquerda.png';
import WhiteRight from '../assets/BrancoDireita.png';

const Carousel = (props) => {
    const {children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 3)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 3)
        }
    }

    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }

    return (
        <div class="carousel-center">
            <img alt="" src={WhiteLeft} id="white-left" width="330px"/>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    {/* You can alwas change the content of the button to other things */}
                    {
                        currentIndex > 0 &&
                        <button onClick={prev} className="left-arrow">
                            &lt;
                        </button>
                    }
                    <div
                        className="carousel-content-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        <div
                            className={`carousel-content show-${show}`}
                            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)`, 
                            transition: '0.8s' }}
                        >
                            {children}
                        </div>
                    </div>
                    {/* You can alwas change the content of the button to other things */}
                    {
                        currentIndex < (length - show) &&
                        <button onClick={next} className="right-arrow">
                            &gt;
                        </button>
                    }
                </div>
            </div>
            <img alt="" src={WhiteRight} id="white-right" width="330px"/>
        </div>
        
    )
}

export default Carousel