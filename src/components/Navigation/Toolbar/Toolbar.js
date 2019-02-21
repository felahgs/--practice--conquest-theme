import React from 'react';
import './Toolbar.css';

    const toolbar = () => {
        return (
            <div>
                <nav className="Toolbar">
                    <ul>
                        <li> <a href="#home">Home</a></li>
                        <li><a href="#section1">About</a></li>
                        <li><a href="#section2">Services</a></li>
                        <li><a href="#section3">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }

export default toolbar