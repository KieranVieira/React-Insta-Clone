import React, { Component } from 'react';
import dummyData from './assets/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postData: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.postData}/>
      </div>
    );
  }
}

export default App;
