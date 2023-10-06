import React, { useState } from "react";
import "./slider.less";

export const TestSlider = () => {
    const [pageX, setPageX] = useState(0);
    const [stopPropagation, setStopPropagation] = useState(false);

    function handleDocumentMouseMove(e: MouseEvent) {
        setStopPropagation(false);
        setPageX(e.pageX);
    }

    function handleSliderMouseMove(e: React.MouseEvent) {
        e.stopPropagation();
        setStopPropagation(true);
    }

    function handleDocumentMouseUp() {
        setStopPropagation(false);
        document.removeEventListener("mousemove", handleDocumentMouseMove);
        document.removeEventListener("mouseup", handleDocumentMouseUp);
    }

    function handleThumbMouseDown() {
        setPageX(0);
        document.addEventListener("mousemove", handleDocumentMouseMove);
        document.addEventListener("mouseup", handleDocumentMouseUp);
    }

    return (
        <>
            <span className="slider" onMouseMove={handleSliderMouseMove}>
                <span className="slider__rail"></span>
                <span
                    className="slider__thumb"
                    onMouseDown={handleThumbMouseDown}
                ></span>
            </span>
            <div className="result">{`PageX: ${pageX}`}</div>
            <div className="result">{`stopPropagation: ${stopPropagation}`}</div>
        </>
    );
};
