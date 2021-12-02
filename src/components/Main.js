import { Component } from 'react';
import { Row } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import hornedBeasts from './data.json';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hornedBeasts:
  //   };

  render() {
    return (
      <>
        <Row sm={1} md={2} lg={5}>
          {hornedBeasts.map(beast => <HornedBeast beastAttribute={beast} />)}
        </Row>
      </>
    );
  }
}

export default Main;

