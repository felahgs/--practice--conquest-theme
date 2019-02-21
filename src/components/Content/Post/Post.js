import React from 'react';

import './Post.css'

const post = (props) => {
    return (
        <div className="Post">
            <div className="container">
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
        </div>
    );
}

export default post;