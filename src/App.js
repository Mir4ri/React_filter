import React, { Component } from 'react';
import './App.css';
import Header  from './components/Header'
import Content from './components/Content'
import Footer  from './components/Footer'
import users   from './data/users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header  className="App-header"/>
        <Content className="App-content" users={users}/>
        <Footer  className="App-footer"/>
      </div>
    );
  }
}

export default App;
