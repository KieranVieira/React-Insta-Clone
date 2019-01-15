import React, { Component } from 'react';
import dummyData from './assets/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postData: [],
      searchQuery: '',
    }
  }

  componentDidMount(){
    this.setState({
      postData: dummyData
    })
  }

  search = e => {
    console.log(e.target.value)
    this.setState({
      // searchQuery: e.target.value,
      postData: dummyData.filter(post => {
        return post.username.includes(e.target.value)
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar search={this.search}/>
        <PostContainer posts={this.state.postData}/>
      </div>
    );
  }
}

export default App;
