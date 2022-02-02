import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Card, Button, Form, Container, Grid } from "tabler-react";

class Calculator extends Component {
  render() {
    return (
      <Grid.Row cards deck> 

        <Grid.Col md={4}>
          <Card>
            <Container>
              <Card.Header>
                <Card.Title color = "#0000FF">Calculater Your Account eturns</Card.Title>
              </Card.Header>
              <Card.Body>
                30% Daily Reinvest for 30 days : 
              </Card.Body>
              <Card.Body>
                10% Daily Profit for 30 days : 
              </Card.Body>
            </Container>
          </Card>
        </Grid.Col>
      

      </Grid.Row>
    );
  }
}a
export default Calculator;