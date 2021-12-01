import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

export default class HornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    };
  }

  handleClick = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  }

  render() {
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={this.props.imageURL} alt={this.props.title} title={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <p>{this.props.description}</p>
            <p>❤️ {this.state.favorites}</p>
          </Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Favorite</Button>{' '}
        </Card.Body>
      </Card>
    );
  }
}
