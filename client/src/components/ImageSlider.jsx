import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import one from '../assets/image/woman.jpeg';
import two from '../assets/image/lii.jpg';
import three from '../assets/image/three.jpg';

function ImageSlider() {
    // Sample slide images
const slides = [
    one,
    two,
    three
  ];
  
    const [curr, setCurr] = useState(0);
    const autoSlide = true; // Set to true to enable auto-sliding
    const autoSlideInterval = 3000; // Slide change interval in milliseconds (3 seconds)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return; // If autoSlide is false, do not start the interval
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [autoSlide, autoSlideInterval]); // Depend on autoSlide and autoSlideInterval

    return (


       <div className="overflow-hidden relative w-[90%] mx-auto  p-10 max-h-[400px] ">
            {/* Image Container */}
            <div 
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {/* Image inside container */}
                        <img 
                            src={slide} 
                            alt={`slide-${index}`} 
                            className="w-full h-500 object-fill" 
                        />
                    </div>
                ))}
            </div>
            


            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full text-left shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 rounded-full text-right shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0  right-0 flex justify-center gap-2">
                {slides.map((s, i) => (
                    <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                ))}
            </div>
        </div>
    )
}

export default ImageSlider







