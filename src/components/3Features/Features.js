import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";
import logo from './logosmall.png';
import roilogo from './siscoinsmall.png';

import { Card, Button, Form, Container, Grid } from "tabler-react";

class Features extends Component {
  render() {
    return (
      <>
      <Grid.Row cards deck> 

        <Grid.Col>
          <Card>
            <Container>
              <Card.Header>
                <Card.Title color = "#0000FF">STABLE INCOME SYSTEM FEATURES <img src={logo}/></Card.Title>
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
                <Card.Title color = "#0000FF" d = "flex">ROI TOKEN FEATURES <img src={roilogo}/></Card.Title>
              </Card.Header>
                
              <Card.Body>
                Earn ROI Tokens on every investment in Stable Income System
              </Card.Body>
              <Card.Body>
                Deflationary token that burns 3% ROI tokens on its each transaction
              </Card.Body>
              <Card.Body>
                Automatically rewards holders with 1% tokens on its each transaction
              </Card.Body>
              <Card.Body>
                It is the primary token of Stable Income System
              </Card.Body>
              <Card.Body>
                Minting will stop once its Total Supply is reached
              </Card.Body>
              <Card.Body>
                Holders will be able to claim all future airdrops.
              </Card.Body>
              <Card.Body>
                
              </Card.Body>
            </Container>
          </Card>
        </Grid.Col>
      

      </Grid.Row>

      </>
    );
  }
}
export default Features;