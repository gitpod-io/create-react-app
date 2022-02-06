import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Card, Button, Form, Container, Grid, Table } from "tabler-react";

class Referral extends Component {
  render() {
    return (
      <>
<Grid.Row cards deck> 

<Grid.Col>
  <Card>
<Table>

<Table.Header>
<Table.ColHeader>
<Card.Header>
        <Card.Title color = "#0000FF">REFERRALS</Card.Title>
        </Card.Header>
        </Table.ColHeader>

        
<Table.ColHeader>Commission</Table.ColHeader>
<Table.ColHeader>Balance</Table.ColHeader>
<Table.ColHeader>Balance(USD)</Table.ColHeader>
</Table.Header>
<Table.Body>
<Table.Row>
<Table.Col>Your Total Referral Rewards</Table.Col>
<Table.Col></Table.Col>
<Table.Col>\\balance</Table.Col>
<Table.Col>\\balanceUSD</Table.Col>
</Table.Row>
<Table.Row>
<Table.Col>Level 1</Table.Col>
<Table.Col>5%</Table.Col>
<Table.Col>\\balance</Table.Col>
<Table.Col>\\balanceUSD</Table.Col>
</Table.Row>
<Table.Row>
<Table.Col>Level 2</Table.Col>
<Table.Col>4%</Table.Col>
<Table.Col>\\balance</Table.Col>
<Table.Col>\\balanceUSD</Table.Col>
</Table.Row>
<Table.Row>
<Table.Col>Level 3</Table.Col>
<Table.Col>3%</Table.Col>
<Table.Col>\\balance</Table.Col>
<Table.Col>\\balanceUSD</Table.Col>
</Table.Row>
<Table.Row>
<Table.Col>Level 4</Table.Col>
<Table.Col>2%</Table.Col>
<Table.Col>\\balance</Table.Col>
<Table.Col>\\balanceUSD</Table.Col>
</Table.Row>
<Table.Row>
<Table.Col>Level 5</Table.Col>
<Table.Col>1%</Table.Col>
<Table.Col>\\balance</Table.Col>
<Table.Col>\\balanceUSD</Table.Col>
</Table.Row>
</Table.Body>
</Table>
</Card>
        </Grid.Col>
      


      </Grid.Row>

      </>
    );
  }
}
export default Referral;