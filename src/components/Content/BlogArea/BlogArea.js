import React from 'react';
import BlogPost from './BlogPost/BlogPost';

import './BlogArea.css';

const blogArea = (props) => {
    return (
        <div className="blog-area">
            <p>Blog Area</p>
            <div className="container">
                <BlogPost 
                    img='blog1.jpg' 
                    title='Two Column Left Side' 
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget 
                        eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at 
                        consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit 
                        finibus pretium.

                        Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non 
                        venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu 
                        sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit 
                        metus.'
                        btnType='none'/>

                <BlogPost 
                    img='blog2.jpg' 
                    title='Two Column Right Side' 
                    content='Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor 
                        eros eget eros maximus, ut cursus sem euismod. Donec iaculis 
                        tristique odio at consectetur. Nullam dignissim varius suscipit. 
                        Sed in leo sit amet velit finibus pretium. Vestibulum vel mauris 
                        at erat mattis accumsan et ac lorem. Cras non venenatis orci, 
                        sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, 
                        dignissim eu orci. Sed vitae venenatis magna, in blandit metus.' 
                    btnText='Read More'/>
            </div>
        </div>
    );
}

export default blogArea;