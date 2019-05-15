import React from 'react';
import Form from '../Form/Form';
import Image from '../../../assets/images/contact/chinese_moutain_peek.jpg'

import './ContactArea.css';

const contactArea = () => {
    return (
        // <div className="contact-area" style={{backgroundImage: 'url(' + Image + ')'}}>
        <div className="contact-area" style ={ { backgroundImage: "url(" + Image + ")" }} >
            {/* <h1>Contact Area</h1> */}
            <div className="container">
                <div className="contact-message" >
                    <h2>Contact Form</h2>
                    <p>
                        Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
                        <br/>
                        felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia.
                        <br/>
                        Etiam a mi quis arcu varius condimentum.
                    </p>
                </div>
                <Form/>
            </div>
        </div>
    )
}

export default contactArea;