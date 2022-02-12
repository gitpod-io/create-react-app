import React, { useState, useEffect } from "react";
import getContracts from '../ethereumConnection/ethereumConnection';

import "tabler-react/dist/Tabler.css";

import { StampCard, Card, Button, Form, Grid } from "tabler-react";

function AccountStatus() {
  const [stableIncomeSystem, setStableIncomeSystem] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { stableIncomeSystem, rOIToken } = await getContracts();
      const data = await stableIncomeSystem.totalSupply();
      setStableIncomeSystem(stableIncomeSystem);
      setData(data);
    };
    init();
  }, []);

    return (<>
      <Card>
      <Grid.Row cards deck> 
        <Grid.Col>
            <StampCard
              color="yellow"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >Your Balance</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row><a ><small>\\balance USD</small></a></Grid.Row>
                        <Grid.Row>

          <Form.Group>
                <Form.InputGroup>
                  <Form.Input shape="pill" placeholder="Enter amount to invest" />
                  <Form.InputGroupAppend>
                    <Button pill
                      RootComponent="a"
                      color="primary"
                    >
                      Invest
                    </Button>
                  </Form.InputGroupAppend>
                </Form.InputGroup>
              </Form.Group></Grid.Row>
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
                        <Grid.Row><a >Your Earnings</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row><a ><small>\\balance USD</small></a></Grid.Row>
                      </Grid.Col>
                      <Grid.Col>
                        <Grid.Col cards deck><Grid.Row><Button pill color="primary">Withdraw</Button></Grid.Row>
                                  <Grid.Row><Button pill color="primary">Reinvest</Button></Grid.Row>
                        </Grid.Col>
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
              color="red"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >Your Deposit</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row><a ><small>\\balance USD</small></a></Grid.Row>
                      </Grid.Col> 
                      }
              footer={""}
            />
        </Grid.Col>
        <Grid.Col>
            <StampCard
              color="pink"
              icon="check"
              header={<Grid.Col cards deck>
                        <Grid.Row><a >Your Reinvested</a></Grid.Row>
                        <Grid.Row><a ><small>\\balance</small></a></Grid.Row>
                        <Grid.Row><a ><small>\\balance USD</small></a></Grid.Row>
                      </Grid.Col> 
                      }
              footer={""}
            />
        </Grid.Col>
        <Grid.Col>
            <StampCard
              color="purple"
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
export default AccountStatus;