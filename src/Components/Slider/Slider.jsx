import { useState } from 'react';
import './Slider.css';

const sliderStyles = {
    height: "100%",
    width: "100%",
    position: "relative",
};

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "5%",
    fontSize: "2vw",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "5%",
    fontSize: "2vw",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1vh",
};

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "2vh",
    zIndex: 1,
    color: "white",
};

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex]})`,
    };

    return (
        <div style={sliderStyles}>
            <div onClick={goToPrevious} style={leftArrowStyles}>
                ❰
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
                ❱
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        style={dotStyle}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
