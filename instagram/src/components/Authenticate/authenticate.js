import React from 'react';
import PostsPage from '../PostContainer/PostsPage'
import LoginPage from '../Login/Login'

const authenticate = Posts => Login => {
    return class extends React.Component {
        constructor(){
            super();
            this.state = {
              loggedIn: false,
            }
        }

        componentDidMount(){
            this.setState({
                loggedIn: localStorage.getItem('loggedIn')
            })
        }

        render(){
            return this.state.loggedIn ? <Posts search={this.props.search} posts={this.props.posts}/> : <Login login={this.props.login}/>
        }
    }
}

export default authenticate(PostsPage)(LoginPage);