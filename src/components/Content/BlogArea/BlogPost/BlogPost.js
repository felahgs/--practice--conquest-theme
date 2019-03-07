import React from 'react';
import Button from '../../UI/Button/Button';

import './BlogPost.css';

const blogPost = (props) => {
    return (
        <div className="blog-post">
            <img src={require(`../../../../assets/images/blog/${props.img}`)} alt={props.img} ></img>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <Button btnType={props.btnType}>{props.btnText}</Button>
        </div>
    )
}

export default blogPost;