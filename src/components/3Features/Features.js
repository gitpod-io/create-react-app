import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Card, Button, Form, Container, Grid } from "tabler-react";

class Features extends Component {
  render() {
    return (
      <Container>
      <Grid.Row cards deck> 

        <Grid.Col>
          <Card>
            <Container>
              <Card.Header>
                <Card.Title color = "#0000FF">STABLE INCOME SYSTEM FEATURES</Card.Title>
              </Card.Header>
              <Card.Body>
                Daily 10% returns
              </Card.Body>
              <Card.Body>
                Daily 30% Auto-reinvestment
              </Card.Body>
              <Card.Body>
                33% reinvestment on withdraw
              </Card.Body>
            </Container>
          </Card>
        </Grid.Col>
        <Grid.Col>
          <Card>
            <Container>
              <Card.Header>
                <Card.Title color = "#0000FF">ROI TOKEN FEATURES</Card.Title>
              </Card.Header>
              <Card.Body>
                Earn ROI Tokens on every investment
              </Card.Body>
              <Card.Body>
                Daily 30% Auto-reinvestment
              </Card.Body>
              <Card.Body>
                33% reinvestment on withdraw
              </Card.Body>
              <Card.Body>
                
              </Card.Body>
            </Container>
          </Card>
        </Grid.Col>
      

      </Grid.Row>

      </Container>
    );
  }
}
export default Features;