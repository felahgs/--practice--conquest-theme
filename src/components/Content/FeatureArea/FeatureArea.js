import React from 'react';
import FeatureContent from './FeatureContent/FeatureContent';

import './FeatureArea.css';

const featureArea = () => {
    return (
            <div className="feature-area">
                <p>Feature Area</p>
                <div className="container">
                    <FeatureContent/>
                    <FeatureContent/>
                    <FeatureContent/>
                </div>
            </div>
    );
}

export default featureArea;