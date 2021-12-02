import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import beastData from './components/data.json';
import SelectBeast from './components/SelectBeast.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // modal not shown by default
      showModal: false,
      clickedBeast: {}
    };
  }

  showModal = (beast) => {
    // sets state to true when modal is shown
    this.setState({ showModal: true, clickedBeast: beast });
  }

  closeModal = () => {
    // sets state to false when modal closed
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Header />
        <Main beastData={beastData} showModal={this.showModal} closeModal={this.closeModal} />
        <SelectBeast show={this.state.showModal} beast={this.state.clickedBeast} closeModal={this.closeModal} />
        <Footer />
      </div>
    );
  }
}
