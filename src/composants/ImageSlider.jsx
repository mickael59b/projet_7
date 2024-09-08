// src/components/ImageSlider.jsx
import React from 'react';
import Left from '../assets/images/arrow_left.png';
import Right from '../assets/images/arrow_right.png';

function ImageSlider({ pictures, currentPicture, handlePrev, handleNext }) {
    return (
        <div id="banner">
            <div className="slide">
                <div className="slider-img">
                    <img src={currentPicture} alt={`Slide`} />
                </div>
            </div>
            <div className="slide-indicator">
                {pictures.indexOf(currentPicture) + 1} / {pictures.length}
            </div>
            {pictures.length > 1 && (
                <>
                    <div id="left" className="arrow arrow_left" onClick={handlePrev}>
                        <img src={Left} alt="left" />
                    </div>
                    <div id="right" className="arrow arrow_right" onClick={handleNext}>
                        <img src={Right} alt="right" />
                    </div>
                </>
            )}
        </div>
    );
}

export default ImageSlider;
