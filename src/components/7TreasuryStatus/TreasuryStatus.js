import React, { useState, useEffect } from "react";
import getContracts from '../ethereumConnection/ethereumConnection';

import "tabler-react/dist/Tabler.css";

import { SocialNetworksList, Card, Grid, Table } from "tabler-react";

function TreasuryStatus() {
  const [stableIncomeSystem, setStableIncomeSystem] = useState(undefined);
  const [totalSupply, setTotalSupply] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { stableIncomeSystem, rOIToken } = await getContracts();
      const totalSupply = await stableIncomeSystem.totalSupply();
      setStableIncomeSystem(stableIncomeSystem);
      setTotalSupply(totalSupply);
    };
    init();
  }, []);

    return (
      <>
      <Grid.Row cards deck> 

        <Grid.Col>
          <Card>
<Table>

  <Table.Header>
    <Table.ColHeader>
<Card.Header>
                <Card.Title color = "#0000FF">Treasury Status</Card.Title></Card.Header>
      </Table.ColHeader>
    <Table.ColHeader>Balance</Table.ColHeader>
    <Table.ColHeader>Balance(USD)</Table.ColHeader>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col>Total Invested : </Table.Col>
      <Table.Col>\\balance</Table.Col>
      <Table.Col>\\balanceUSD</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col>Total Reinvested : </Table.Col>
      <Table.Col>\\balance</Table.Col>
      <Table.Col>\\balanceUSD</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col>Total Withdrawals : </Table.Col>
      <Table.Col>\\balance</Table.Col>
      <Table.Col>\\balanceUSD</Table.Col>
    </Table.Row>
    <Table.Row>
      <Table.Col>Treasury Balance : </Table.Col>
      <Table.Col>\\balance</Table.Col>
      <Table.Col>\\balanceUSD</Table.Col>
    </Table.Row>
  </Table.Body>
</Table>
          </Card>
    <Card>          
      <SocialNetworksList
        itemsObjects={[
          { name: "telegramann", label: "Telegram Announcements",  color: "blue", to: "http://www.twitter.com" },
          { name: "telegramgroup", label: "Telegram Group",  color: "blue", to: "http://www.twitter.com" },
        ]}
        prefix="fa"
        asButtons
      />
      </Card>

        
      </Grid.Col>

      </Grid.Row>

      </>
      
    );
}
export default TreasuryStatus;