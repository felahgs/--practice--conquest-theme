import React from 'react';

import './Button.css';

const button = (props) => {
    return (
        <button 
        disabled={props.disabled}
            className={['button', props.btnType].join(' ')}
            // className="button"
            onClick={props.clicked}>{props.children}</button>
    )
};

export default button;