import React from 'react';
// import TestimonialContent from './TestimonialContent/TestimonialContent';
import ContentDisplay from '../ContentDisplay/ContentDisplay'

import './TestimonialArea.css'

const testimonialArea = () => {
    return (
        <div className='testimonial-area'>
            {/* <h1>Testimonial Area</h1> */}
            <div className="container">
                <div className="small-testimonial">
                    <ContentDisplay
                            class='testimonial-content'
                            img= {'testimonial/testimonial-1.jpg'}
                            title='Column One'
                            content='Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra.'
                            // btnType='green'
                            btnType='none'/>
                    <ContentDisplay
                            class='testimonial-content'
                            img= {'testimonial/testimonial-2.jpg'}
                            title='Column Two'
                            content='Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis'
                            // btnType='green'
                            btnText='Read It'/>
                    <ContentDisplay
                            class='testimonial-content'
                            img= {'testimonial/testimonial-3.jpg'}
                            title='Column Three'
                            content='Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra.'
                            // btnType='green'
                            btnType='none' />
                    <ContentDisplay
                            class='testimonial-content'
                            img= {'testimonial/testimonial-4.jpg'}
                            title='Column Four'
                            content='Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis.'
                            // btnType='green'
                            btnText='Details'/>
                </div>
                <div className="large-testimonial">
                    <ContentDisplay
                                class='testimonial-content'
                                img= {'testimonial/testimonial-big.jpg'}
                                title='One Big Column'
                                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium. Vivamus dictum nisi ac fermentum interdum. Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus. Praesent volutpat cursus rhoncus. Aenean arcu diam, suscipit ac neque in, sollicitudin convallis orci.

                                Fusce eu porta massa, sed tincidunt turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a urna tellus. Integer pharetra vitae nisi et lacinia. Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque quis, maximus eget nisi.'
                                // btnType='green'
                                btnText='Read More'/>
                </div>
            </div>
        </div>
    )
}

export default testimonialArea;
