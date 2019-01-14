import React from 'react';

const Comment = props => {
    return(
        <div className="comment">
            <p><a href="https://kieranvieira.com/">{props.comment.username}</a>{props.comment.text}</p>
        </div>
    )
}

export default Comment