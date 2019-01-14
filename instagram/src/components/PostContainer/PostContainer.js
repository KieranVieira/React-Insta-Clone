import React from 'react';
import Post from './Post'
import './PostContainer.css'

const PostContainer = props => {
    return(
        <div className="post-container">
            {props.posts.map(post => {
                return <Post postData={post}/>
            })}
        </div>
    )
}

export default PostContainer;