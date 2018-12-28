import React from 'react';
import Post from './Post';
import './PostContainer.css'

const PostContainer = props => {
    return (
        <div>
            <Post postData={props.postData}/>
        </div>
    )
}

export default PostContainer;