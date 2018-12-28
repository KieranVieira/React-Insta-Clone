import React from 'react';
import Post from './Post';
import './PostContainer.css'

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => {
                return <Post 
                    username={post.username}
                    thumbnail={post.thumbnailUrl}
                    image={post.imageUrl}
                    likes={post.likes}
                    comments={post.comments}
                    time={post.timestamp}
                />
            })}
        </div>
    )
}

export default PostContainer;