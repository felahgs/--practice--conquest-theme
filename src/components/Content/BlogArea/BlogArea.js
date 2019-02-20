import React from 'react';
import BlogPost from './BlogPost/BlogPost';

import './BlogArea.css';

const blogArea = () => {
    return (
        <div className="blog-area">
            <p>Blog Area</p>
            <div className="container">
                <BlogPost/>
                <BlogPost/>
            </div>
        </div>
    );
}

export default blogArea;