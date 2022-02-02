import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { StampCard, Card, Button, Form, Container, Grid , Table} from "tabler-react";

class TokenStats extends Component {
  render() {
    return (<>

<Card.Header>
                <Card.Title color = "#0000FF">ROI TOKEN STATS</Card.Title>
              </Card.Header>
      <Card>
      <Grid.Row cards deck> 
        <Grid.Col>
            <StampCard
              color="yellow"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >Your ROI Token Balance</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row><a ><small>\\balance USD</small></a></Grid.Row>
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
              header={<Grid.Row cards deck>
                      <Grid.Col>
                        <Grid.Row><a >ROI Current Supply</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                      </Grid.Col>
                      </Grid.Row> 
                      }
              footer={""}
            />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row cards deck> 
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
        <Grid.Col>
            <StampCard
              color="#597e8d"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >ROI Token Market Capitalization</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance USD</small></a></Grid.Row>
                      </Grid.Col> 
                      }
            />
        </Grid.Col>
        <Grid.Col>
            <StampCard
              color="#7f5345"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >Your Withdrawals</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row><a ><small>\\balance USD</small></a></Grid.Row>
                      </Grid.Col> 
                      }
              footer={""}
            />
        </Grid.Col>
      </Grid.Row>
</Card>
<Card>

</Card>
</>
    );
  }
}
export default TokenStats;