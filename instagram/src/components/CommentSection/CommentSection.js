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
        this.setState({
            comments: this.state.comments.push({
                username: this.state.username, 
                text: this.state.commentText
            })
        })
        console.log(this.state.comments)
    }

    render(){
        return(
            <form className="add-comment" onSubmit={this.addNewComment}>
                <input type="text" placeholder="Add a comment..." onChange={this.changeHandler}/>
                <i className="fas fa-ellipsis-h"></i>
            </form>
        )
    }

}

export default CommentSection;