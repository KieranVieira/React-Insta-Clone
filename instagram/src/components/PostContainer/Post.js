import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const Post = props => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img src={props.thumbnail} />
                <h1>{props.username}</h1>
            </div>
            <img src={props.image} />
            <CommentSection 
                comments = {props.comments}
                likes = {props.likes}
            />
        </div>
    )
}

// class Post extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             comments: [],
//         }
//     }

//     componentDidMount(){
//         this.setState({
//             comments: this.state
//         })
//     }

//     addNewComment = e => {

//     }

//     render(){
//         return (
//             <div className="post-container">
//                 <div className="post-header">
//                     <img src={this.props.thumbnail} />
//                     <h1>{this.props.username}</h1>
//                 </div>
//                 <img src={this.props.image} />
//                 <div className="post-bottom">
//                     <div className="like-comment">
//                         <i className="far fa-heart"></i>
//                         <i className="far fa-comment"></i>
//                     </div>
//                     <p>{`${this.props.likes} likes`}</p>
    
//                     <div className="comment-container">
//                         {this.props.comments.map(comment => {
//                             return (
//                             <div className="comment">
//                                 <h1> <a href="#">{comment.username}</a></h1>
//                                 <p>{comment.text}</p>
//                             </div>
//                             )
//                         })}
//                     </div>
    
//                     <p className="post-time">{this.props.time}</p>
//                 </div>
//                 <CommentSection 
//                     addComment={this.addNewComment}
//                 />
//             </div>
//         )
//     }
// }

export default Post;