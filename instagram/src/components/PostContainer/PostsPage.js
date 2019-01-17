import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Footer from '../FooterContainer/Footer'
import dummyData from '../../assets/dummy-data'

class PostsPage extends React.Component{
    constructor(){
        super();
        this.state = {
            postData: [],
            searchQuery: '',
        }
    } 

    componentDidMount(){
        this.setState({
        postData: dummyData,
        })
    }

    search = e => {
        this.setState({
        postData: dummyData.filter(post => {
            return post.username.includes(e.target.value)
            })
        })
    }

    render(){
        return(
            <>
                <SearchBar search={this.search}/>
                <div className="page-content">
                    <PostContainer posts={this.state.postData}/>
                    <Footer className="footer-position"/>
                </div>
            </>
        )
    }
}

export default PostsPage