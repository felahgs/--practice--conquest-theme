import React from 'react';
import TestimonialContent from './TestimonialContent/TestimonialContent';

import './TestimonialArea.css'

const testimonialArea = () => {
    return (
        <div className='testimonial-area'>
            <h1>Testimonial Area</h1>
            <div className="container">
                <div className="small-testimonial">
                    <TestimonialContent/>
                    <TestimonialContent/>
                    <TestimonialContent/>
                    <TestimonialContent/>
                </div>
                <div className="large-testimonial">
                    <TestimonialContent/>
                </div>
            </div>
        </div>
    )
}

export default testimonialArea;
