import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import beastData from './components/data.json';
import SelectBeast from './components/SelectBeast.js';
import Form from 'react-bootstrap/Form';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // modal not shown by default
      showModal: false,
      clickedBeast: {},
      filteredBeasts: beastData
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

  handleChange = (event) => {
    const filteredArray = beastData.filter(beast => {
      return beast.horns === parseInt(event.target.value);
    });
    this.setState({ filteredBeasts: filteredArray });

  }

  render() {
    return (
      <div>
        <Header />
        <Form>
          <Form.Select onChange={this.handleChange}>
            <option value="1">Filter Beasts by Number of Horns</option>
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="100">3+ horns</option>
          </Form.Select>
        </Form>
        <Main beastData={this.state.filteredBeasts} showModal={this.showModal} closeModal={this.closeModal} />
        <SelectBeast show={this.state.showModal} beast={this.state.clickedBeast} closeModal={this.closeModal} />
        <Footer />
      </div>
    );
  }
}
