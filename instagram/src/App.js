import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import FooterContainer from './components/FooterContainer/FooterContainer'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: '',
      dummyData: [],
    }
  }

  searchBar = e => {
    this.setState({
      dummyData: dummyData.filter(cv => {
          if(cv.username.includes(e.target.value)){
            return cv
          }
        })
    })
  }

  componentDidMount(){
    this.setState({
      dummyData: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          handleChange={this.searchBar}
        />
        <div className="page-content">
          <PostContainer 
            postData={this.state.dummyData}
          />
          <FooterContainer 
            className="footer-position"
          />
        </div>
      </div>
    );
  }
}

export default App;
