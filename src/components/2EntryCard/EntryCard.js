import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Card, Button, Form, Container, Grid } from "tabler-react";

class EntryCard extends Component {
  render() {
    return (
            <Container>
      <Grid.Row cards deck> 

        <Grid.Col>
          <Card>
              <Card.Header>
                <Card.Title color = "#0000FF">STABLE INCOME SYSTEM</Card.Title>
              </Card.Header>
              <Card.Body>
                Sustainable Income System for Everyone
              </Card.Body>
          </Card>
        </Grid.Col>

      </Grid.Row>
            </Container>
    );
  }
}
export default EntryCard;