import React from 'react';
import FeatureContent from './FeatureContent/FeatureContent';
// import Images from '../../../assets/images/*';

import './FeatureArea.css';

const featureArea = () => {
    return (
            <div className="feature-area">
                <p>Feature Area</p>
                <div className="container">
                    <FeatureContent
                        imgURL= {'feature-1.jpg'}
                        title='Bootstrap v3.3.6'
                        content='Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.'
                        color='blue'
                        btnText='Green Button'
                    />
                    <FeatureContent
                        imgURL= {'feature-2.jpg'}
                        title='Responsive Design'
                        content='Conquer Template is provided by templatemo for free of charge. You can use this template for any kind of website. No credit link is required. All images by Unsplash. Thank you for visiting our website. Please come again!'
                        color='green'
                        btnText='See Details'
                    />
                    <FeatureContent
                        imgURL= {'feature-3.jpg'}
                        title='Parallax Layout'
                        content='Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.'
                        color='red'
                        btnText='Red Button'
                    />
                </div>
            </div>
    );
}

export default featureArea;