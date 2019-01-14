import React, { Component } from 'react';
import dummyData from './assets/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
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
      </div>
    );
  }
}

export default App;
