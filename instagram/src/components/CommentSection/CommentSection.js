import React from 'react';
import Comment from './Comment'
import './CommentSection.css'

const CommentSection = props => {
    return(
        <div className="comment-container">
            {props.comments.map(comment => {
                return <Comment comment={comment}/>
            })}
            <p className="time-stamp">{props.time}</p>
            <form className="comment-section">
                <input type="text" placeholder="Add a comment..."/>
            </form>
        </div>
    )
}

export default CommentSection;