import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const Post = props => {
    return(
        <div className="post">
            <div className="post-header">
                <img src={props.postData.thumbnailUrl} alt={`${props.postData.username} profile picture`}/>
                <h1>{props.postData.username}</h1>
            </div>
            <img src={props.postData.imageUrl} alt={`${props.postData.username} Post Image`} className="main-img"/>
            <div className="post-icons">
                <i className="far fa-heart" />
                <i className="far fa-comment" />
                <div>
                    <p>{`${props.postData.likes} likes`}</p>
                </div>
            </div>
            <CommentSection comments={props.postData.comments} time={props.postData.timestamp}/>
        </div>
    )
}

export default Post