import React from 'react';
import Image from '../../../assets/images/home-image.jpg'

import './ServicesArea.css';

const servicesArea = () => {
    console.log(Image);
    return (
        <div className="services-area">
            {/* <h1>Services Area</h1> */}
            <div className="container">
                <div className="service-message" style={{backgroundImage: 'url(' + Image + ')'}}>
                    {/* <img src={Image} alt="services.jpg"></img> */}
                    <h2>Our Services</h2>
                    <p>Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
                        <br/>
                        felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia.
                        <br/>
                        Etiam a mi quis arcu varius condimentum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default servicesArea