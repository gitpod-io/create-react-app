import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Card, Button, Form, Container } from "tabler-react";

class MyCard extends Component {
  render() {
    return (
      <Card>
          <Container>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">A Button</Button>
          <Form.Input name="username" placeholder="Username" />
        </Card.Body>
          </Container>
      </Card>
    );
  }
}
export default MyCard;