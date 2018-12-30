import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            username: 'your username',
            commentText: '',
            comments: this.props.comments,
        }
    }

    changeHandler = e => {
        this.setState({
            commentText: e.target.value
        })
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {
                username: this.state.username, 
                text: this.state.commentText
                }
            ]
        })
        console.log(this.state.comments)
    }

    render(){
        return(
            <div className="post-bottom">
                <div className="like-comment">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <p>{`${this.props.likes} likes`}</p>

                <div className="comment-container">
                    {this.state.comments.map(comment => {
                        return (
                        <div className="comment">
                            <h1> <a href="#">{comment.username}</a></h1>
                            <p>{comment.text}</p>
                        </div>
                        )
                    })}
                </div>

                <p className="post-time">{this.props.time}</p>
                
            
                <form className="add-comment" onSubmit={this.addNewComment}>
                    <input type="text" placeholder="Add a comment..." onChange={this.changeHandler}/>
                    <i className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }

}

export default CommentSection;