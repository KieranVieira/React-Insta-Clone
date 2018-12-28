import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const Post = props => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img src={props.postData[0].thumbnailUrl} />
                <h1>{props.postData[0].username}</h1>
            </div>
            <img src={props.postData[0].imageUrl} />
            <div className="post-bottom">
                <div className="like-comment">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                </div>
                <p>{`${props.postData[0].likes} likes`}</p>
                <CommentSection 
                    comments={props.postData.comments}
                />
                <p className="post-time">2 hours ago</p>
            </div>

        </div>
    )
}

export default Post;