import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Comment from '../CommentSection/Comment';
import './PostContainer.css';

const Post = props => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img src={props.thumbnail} />
                <h1>{props.username}</h1>
            </div>
            <img src={props.image} />
            <div className="post-bottom">
                <div className="like-comment">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                </div>
                <p>{`${props.likes} likes`}</p>
                <CommentSection 
                    comments={props.comments}
                />
                <p className="post-time">{props.time}</p>
            </div>
            <Comment />
        </div>
    )
}

export default Post;