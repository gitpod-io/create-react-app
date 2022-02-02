import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Card, Button, Form, Container, Grid } from "tabler-react";

class Roadmap extends Component {
  render() {
    return (
      <Grid.Row cards deck> 

        <Grid.Col md={4}>
          <Card>
            <Container>
              <Card.Header>
                <Card.Title color = "#0000FF">Features</Card.Title>
              </Card.Header>
              <Card.Body>
                Sustainable Income System
              </Card.Body>
            </Container>
          </Card>
        </Grid.Col>
      

      </Grid.Row>
    );
  }
}a
export default Roadmap;