import React from 'react';
import Button from '../UI/Button/Button';

import './ContentDisplay.css'

const ContentDisplay = (props) => {
    const img = typeof props.img !== 'undefined' ? <img src={require(`../../../assets/images/${props.img}`)} alt={props.img} ></img> : null
    // if (props.img)
    return (
        <div className={[props.class, 'content-display'].join(' ')}>
            {/* Using 'grave accent' for string with expressions inside: ´Some text ${expresion}´ */}
            {img}
            <h2 className={props.btnType}>{props.title}</h2>
            <p>{props.content}</p>
            <Button btnType={props.btnType}>{props.btnText}</Button>
        </div>
    );
}

export default ContentDisplay;