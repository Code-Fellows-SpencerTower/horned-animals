import { Component } from 'react';

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
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageURL} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
        <p>❤️ {this.state.favorites}</p>
        {/* Heart emoji from: https://emojiguide.org/red-heart */}
        <button onClick={this.handleClick}>Favorite</button>
      </div>
    );
  }
}
