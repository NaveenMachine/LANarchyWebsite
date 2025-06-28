import { useState, useEffect, useCallback } from 'react';
import './Slider.css';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            goToNext();
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, goToNext]);

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div className="slider-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Main Slider */}
            <div className="slider">
                {/* Navigation Arrows */}
                <button className="slider-arrow slider-arrow-left" onClick={goToPrevious} aria-label="Previous slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                <button className="slider-arrow slider-arrow-right" onClick={goToNext} aria-label="Next slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                {/* Slides */}
                <div className="slides-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            style={{
                                backgroundImage: `url(${slide})`,
                                transform: `translateX(${(index - currentIndex) * 100}%)`
                            }}
                        />
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="slide-counter">
                    <span className="current-slide">{currentIndex + 1}</span>
                    <span className="slide-separator">/</span>
                    <span className="total-slides">{slides.length}</span>
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="dots-container">
                {slides.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(slideIndex)}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    >
                        <div className="dot-fill"></div>
                    </button>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
                <div 
                    className="progress-fill"
                    style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Slider;
