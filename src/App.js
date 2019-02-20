import React, { Component } from 'react';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Home from './components/Home/Home';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <Home/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
