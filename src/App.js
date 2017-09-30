import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './containers/Header'
import BodyHeader from './containers/BodyHeader'
import Home from './containers/Home'
import Footer from './containers/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <Header />
      <BodyHeader />
      <Home />
      <Footer />
      </div>
    );
  }
}

export default App;
