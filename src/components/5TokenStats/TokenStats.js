import React, { useState, useEffect } from "react";
import getContracts from '../ethereumConnection/ethereumConnection';
import { BigNumber } from "bignumber.js";

import "tabler-react/dist/Tabler.css";

import { StampCard, Card, Grid } from "tabler-react";

function TokenStats() {
  const [stableIncomeSystem, setStableIncomeSystem] = useState(undefined);
  const [totalSupply, setTotalSupply] = useState(undefined);
  const [balanceOf, setBalanceOf] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { stableIncomeSystem,  } = await getContracts();
      const totalSupply = await stableIncomeSystem.totalSupply();
      setStableIncomeSystem(stableIncomeSystem);
      setTotalSupply(totalSupply);
      console.log(stableIncomeSystem.toString());
    };
    init();
  }, []);

  if(
    typeof stableIncomeSystem === 'undefined'
    || typeof totalSupply === 'undefined'
  ) {
    return 'Loading...';
  }

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
                        <Grid.Row><a >ROI Cirulating Tokens</a></Grid.Row>
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
                        <Grid.Row><a ><small>{((totalSupply).div(10000000000000)).div(100000).toString()}</small></a></Grid.Row>
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
export default TokenStats;