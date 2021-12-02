import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import hornedBeasts from './components/data.json';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main hornedBeasts={hornedBeasts} />
        <Footer />
      </div>
    );
  }
}
