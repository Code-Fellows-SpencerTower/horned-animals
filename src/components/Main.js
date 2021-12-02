import { Component } from 'react';
import { Row } from 'react-bootstrap';
import HornedBeast from './HornedBeast';


class Main extends Component {

  render() {
    return (
      <>
        <Row sm={1} md={2} lg={5}>
          {this.props.beastData.map(beast => <HornedBeast beastAttribute={beast} showModal={this.props.showModal} closeModal={this.props.closeModal} />)}
        </Row>
      </>
    );
  }
}

export default Main;

