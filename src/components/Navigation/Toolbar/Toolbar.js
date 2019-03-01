import React from 'react';
import './Toolbar.css';
import scrollToElement from 'scroll-to-element'

    const toolbar = () => {
        return (
            <div>
                <nav className="Toolbar">
                    <ul>
                        <li> <p onClick={() => scrollToElement('#home', {
                                offset: 0,
                                ease:'out-bounce',
                                duration:1  })}>Home</p></li>
                                
                        <li> <p onClick={() => scrollToElement('#section1', {
                                offset: -116,
                                ease:'out-bounce',
                                duration:1  })}>About</p></li>

                        <li> <p onClick={() => scrollToElement('#section2', {
                                offset: -116,
                                ease:'out-bounce',
                                duration:1  })}>Services</p></li>

                        <li> <p onClick={() => scrollToElement('#section3', {
                                offset: -116,
                                ease:'out-bounce',
                                duration:1  })}>Contact</p></li>
                        {/* <li> <a href="#home">Home</a></li>
                        <li><a href="#section1">About</a></li>
                        <li><a href="#section2">Services</a></li>
                        <li><a href="#section3">Contact</a></li> */}
                    </ul>
                </nav>
            </div>
        )
    }

export default toolbar