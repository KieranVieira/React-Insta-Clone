import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: ''
    }
  }

  searchBar = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          handleChange={this.searchBar}
        />
        <PostContainer 
          postData={dummyData}
        />
      </div>
    );
  }
}

export default App;
