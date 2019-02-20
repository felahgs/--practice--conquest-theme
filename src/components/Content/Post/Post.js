import React from 'react';

import './Post.css'

const post = (props) => {
    return (
        <div className="Post">
            <h1>{props.title}</h1>
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
            {props.content}
        </div>
    );
}

export default post;