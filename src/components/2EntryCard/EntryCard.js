import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";
import logo from './logosmall.png';

import { Card, Button, Form, Container, Grid } from "tabler-react";

class EntryCard extends Component {
  render() {
    return (
            <>
      <Grid.Row cards deck> 

        <Grid.Col>
          <Card>
              <Card.Header
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
                <Card.Title 
    color = "#0000FF"><img src={logo}/> STABLE INCOME SYSTEM <img src={logo}/></Card.Title>

                
              </Card.Header>
              <Card.Body>
                A Stable Income System for Everyone
              </Card.Body>
          </Card>
        </Grid.Col>

      </Grid.Row>
            </>
    );
  }
}
export default EntryCard;