import React from 'react';
// import Posts from '../../containers/Posts/Posts';
import FeatureArea from './FeatureArea/FeatureArea';
import BlogArea from './BlogArea/BlogArea';
import ServicesArea from './ServicesArea/ServicesArea';
import TestimonialArea from './TestimonialArea/TestimonialArea';
import ContactArea from './ContactArea/ContactArea';

import './Content.css';

const content = () => {
    return (
        <div className="page-content">
            <div id='section1'>
                <h1>Section 1</h1>
                <FeatureArea/>
                <BlogArea/>
            </div>

            <div id='section2'>
                <h1>Section 2</h1>
                <ServicesArea/>
                <TestimonialArea/>
            </div>

            <div id='section3'>
                <h1>Section 3</h1>
                <ContactArea/>
            </div>
            {/* <Posts/> */}
        </div>
    );
}

export default content;