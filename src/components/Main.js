import { Component } from 'react';
import { Row } from 'react-bootstrap';
import HornedBeast from './HornedBeast';


class Main extends Component {

  render() {
    return (
      <>
        <Row sm={1} md={2} lg={5}>
          {this.props.hornedBeasts.map(beast => <HornedBeast beastAttribute={beast} />)}
        </Row>
      </>
    );
  }
}

export default Main;

