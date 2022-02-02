import logo from './logo.svg';
import './App.css';
import MyCard from './components/test/test';
import { Card, Button, Form, Container, Grid } from "tabler-react";

import TopNav from './components/1TopNav/TopNav';
import EntryCard from './components/2EntryCard/EntryCard';
import Features from './components/3Features/Features';
import AccountStatus from './components/4AccountStatus/AccountStatus';
import TokenStats from './components/5TokenStats/TokenStats';
import Referral from './components/6Referral/Referral';
import TreasuryStatus from './components/7TreasuryStatus/TreasuryStatus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Grid.Row cards deck> 

        <Grid.Col>
          <Container>
          <TopNav/>
          </Container>
          
          <Container>
            <EntryCard/>
          </Container>
          
          <Container>
            <Features/>
          </Container>
          
          <Container>
            <AccountStatus/>
          </Container>

          <Container>
            <TokenStats/>
          </Container>

          <Container>
            <Referral/>
          </Container>

          <Container>
            <TreasuryStatus/>
          </Container>
          
          </Grid.Col>


        <Grid.Col>
          </Grid.Col>

    </Grid.Row> 
    </div>
  );
}

export default App;
