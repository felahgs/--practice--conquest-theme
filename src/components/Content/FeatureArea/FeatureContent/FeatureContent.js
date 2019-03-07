import React from 'react';
import Button from '../../UI/Button/Button';

import Image from '../../../../assets/images/feature-1.jpg';
import './FeatureContent.css';

const featureContent = (props) => {
    // const imgURL = require('../../../../assets/' + props.imgURL)
    console.log('Image:',Image)
    console.log('props.imgURL', props.imgURL)
    // console.log('imgURL:',imgURL)
    return (
        <div className="feature-content">
            {/* Using 'grave accent' for string with expressions inside: ´Some text ${expresion}´ */}
            <img src={require(`../../../../assets/images/${props.imgURL}`)} alt={'as'} ></img>
            <h2 className={props.color}>{props.title}</h2>
            <p >{props.content}</p>
            <Button btnColor={props.color}> {props.btnText} </Button>
        </div>
    )
}

export default featureContent;
