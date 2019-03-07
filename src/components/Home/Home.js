import React from 'react';
import Background from '../../assets/images/background-blur.jpg';


import './Home.css';

const home = () => {
    console.log('Background', Background)
    return (
        <div id="home" className="Home-page" style ={ { backgroundImage: "url(" + Background + ")" }} >
            <div className="Home-content"  >
                <div>
                    <h1>Welcome!!</h1>
                </div>
            </div>
        </div>
    );
};

export default home;
