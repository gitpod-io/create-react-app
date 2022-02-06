import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { StampCard, Card, Button, Form, Container, Grid , Table} from "tabler-react";

class TokenStats extends Component {
  render() {
    return (<>

      <Card>
<Card.Header>
                <Card.Title color = "#0000FF">ROI TOKEN STATS</Card.Title>
              </Card.Header>
      <Grid.Row cards deck> 
        <Grid.Col>
            <StampCard
              color="yellow"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >Your ROI Token Balance</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row>
            </Grid.Row>
                      </Grid.Col> 
                      }
              footer={""}
            />
        </Grid.Col>
        <Grid.Col>
            <StampCard
              color="green"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >ROI Current Supply</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row>
            </Grid.Row>
                      </Grid.Col> 
                      }
              footer={""}
            />
        </Grid.Col>
        <Grid.Col>
            <StampCard
              color="#fd0061"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >ROI Total Supply</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                      </Grid.Col> 
                      }
              footer={""}
            />
        </Grid.Col>
      </Grid.Row>
</Card>
</>
    );
  }
}
export default TokenStats;