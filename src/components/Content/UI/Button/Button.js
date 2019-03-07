import React from 'react';

import './Button.css';

const button = (props) => {
    // const classes[].append('button')
    console.log(props.btnColor)
    return (
        <button 
        disabled={props.disabled}
            className={['button', props.btnColor].join(' ')}
            // className="button"
            onClick={props.clicked}>{props.children}</button>
    )
};

export default button;