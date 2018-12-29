import React from 'react';

const Comment = props => {
    return(
        
        <form className="add-comment">
            <input type="text" placeholder="Add a comment..."/>
            <i class="fas fa-ellipsis-h"></i>
        </form>
    )
}

export default Comment;