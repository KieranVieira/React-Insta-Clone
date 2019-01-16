import React, { Component } from 'react';
import dummyData from './assets/dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/Authenticate/authenticate';
import Login from './components/Login/Login'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postData: [],
      searchQuery: '',
      loggedIn: false,
    }
  }

  componentDidMount(){
    this.setState({
      postData: dummyData,
      loggedIn: localStorage.getItem('loggedIn')
    })
  }

  search = e => {
    this.setState({
      postData: dummyData.filter(post => {
        return post.username.includes(e.target.value)
      })
    })
  }

  login = e => {
    e.preventDefault();
    localStorage.setItem('username', e.target.username.value)
    localStorage.setItem('fullname', e.target.fullname.value)
    localStorage.setItem('password', e.target.password.value)
    localStorage.setItem('loggedIn', true)
  }
  
  render() {
    return (
      <div className="App">
        {/* <PostsPage search={this.search} posts={this.state.postData}/> */}
        <Login login={this.login}/>
      </div>
    );
  }
}

const HOC = authenticate(App)

export default App;
