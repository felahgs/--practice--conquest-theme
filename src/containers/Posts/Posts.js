import React, { Component } from 'react';
import Post from '../../components/Content/Post/Post';
import axios from 'axios';

class Posts extends Component {
    state = {
        num: 4,
        posts:[]
    }
    
   componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => {
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                    }
                })
                this.setState({posts: updatedPosts});
                // response.map((data) => {
                //     console.log(data);
                // })
                // this.state.posts.push(response.data)
                console.log(this.state.posts);
            })
    };

    render () {
        let content = <div style={{textAlign: 'center', border: '1px dashed red'}}>Loading</div>;
        content = this.state.posts.map(post => {
            return (
                <Post 
                    key={post.id}
                    title={post.title}
                    content={post.body}
                />
            )
        })
        return content;
    }
}
export default Posts;