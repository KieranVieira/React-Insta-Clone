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

        login = e => {
            e.preventDefault();
            localStorage.setItem('username', e.target.username.value);
            localStorage.setItem('fullname', e.target.fullname.value);
            localStorage.setItem('password', e.target.password.value);
            localStorage.setItem('loggedIn', true);
            this.setState({loggedIn:true})
        }

        render(){
            return this.state.loggedIn ? <PostsPage search={this.props.search} posts={this.props.posts}/> : <Login login={this.login}/>
        }
    }
}

export default authenticate(PostsPage)(LoginPage);