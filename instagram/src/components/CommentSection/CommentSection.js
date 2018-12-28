import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return(
        <div className="comment-container">
            {props.comments.map(comment => {
                return (
                <div className="comment">
                    <h1>{comment.username}</h1>
                    <p>{comment.text}</p>
                </div>
                )
            })}
        </div>
    )
}

export default CommentSection;