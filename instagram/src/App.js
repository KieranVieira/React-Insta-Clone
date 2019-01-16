import React, { Component } from 'react';
import dummyData from './assets/dummy-data';
import Authenticate from './components/Authenticate/authenticate';
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
  
  render() {
    return (
      <div className="App">
        <Authenticate 
          search={this.search} 
          posts={this.state.postData} 
        />
      </div>
    );
  }
}

export default App;
