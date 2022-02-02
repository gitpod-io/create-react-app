import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { StampCard, ProgressCard, StatsCard, Card, Button, Form, Container, Grid , Table} from "tabler-react";

class AccountStatus extends Component {
  render() {
    return (
      <Container>
      <Grid.Row cards deck> 
        <Grid.Col>
            <StampCard
              color="yellow"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >Your Balance</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row><a ><small>\\balance USD</small></a></Grid.Row>
                        <Grid.Row><Button pill color="primary">Invest</Button></Grid.Row>
                      </Grid.Col> 
                      }
              footer={""}
            />
          <Card>
<Table>
<Card.Header>
</Card.Header>
  <Table.Header>
    <Table.ColHeader><Card.Title color = "#0000FF">Account Status</Card.Title></Table.ColHeader>
    <Table.ColHeader>Balance</Table.ColHeader>
    <Table.ColHeader>Balance(USD)</Table.ColHeader>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col>Your Withdrawable Balance</Table.Col>
      <Table.Col>\\balance</Table.Col>
      <Table.Col>\\balanceUSD</Table.Col>
    </Table.Row>

    <Grid.Row cards deck> 

          <Grid.Col>
          <Container>
          <Button pill color="primary">Withdraw</Button>
          </Container>
          </Grid.Col>
          <Grid.Col>
          <Container>
          <Button pill color="primary">Reinvest</Button>
          </Container>
          </Grid.Col>

    </Grid.Row> 
  </Table.Body>
</Table>
          </Card>

        </Grid.Col>
        
        <Grid.Col>
          <Card>

<Table>
  <Table.Header>
    <Table.ColHeader></Table.ColHeader>
    <Table.ColHeader>Balance</Table.ColHeader>
    <Table.ColHeader>Balance(USD)</Table.ColHeader>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col>Your Invested</Table.Col>
      <Table.Col>\\balance</Table.Col>
      <Table.Col>\\balanceUSD</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col>Your Reinvested</Table.Col>
      <Table.Col>\\balance</Table.Col>
      <Table.Col>\\balanceUSD</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>
          </Card>
        </Grid.Col>
      


      </Grid.Row>


</Container>
      
    );
  }
}
export default AccountStatus;