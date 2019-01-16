import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer'

const PostsPage = (props) => {
    return(
        <>
            <SearchBar search={props.search}/>
            <PostContainer posts={props.posts}/>
        </>
    )
}

export default PostsPage