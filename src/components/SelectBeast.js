import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class SelectBeast extends Component {

  handleClose = () => {
    this.props.closeModal();
  }

  render() {
    // sets to handle state to close since open by default
    return (
      <Modal show={this.props.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} />
            <Card.Text>{this.props.beast.description}</Card.Text>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
