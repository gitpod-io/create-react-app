import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import ROIRoadmap from './ROIRoadmap.png';

import { Card, Button, Form, Container, Grid } from "tabler-react";

class Roadmap extends Component {
  render() {
    return (<>
      <Grid.Row cards deck> 
        <Grid.Col cards deck>
          <Card>
            <Container>
              <Card.Header>
                <Card.Title color = "#0000FF">ROADMAP</Card.Title>
              </Card.Header>
              <Card.Body>
              <img src={ROIRoadmap}/>
              </Card.Body>
            </Container>
          </Card>
        </Grid.Col>

      </Grid.Row> 
      </>
    );
  }
}
export default Roadmap;