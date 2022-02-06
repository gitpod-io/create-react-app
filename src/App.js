
import './App.css';
import MyCard from './components/test/test';
import { Media, Card, Button, Form, Container, Grid } from "tabler-react";
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

import TopNav from './components/1TopNav/TopNav';
import EntryCard from './components/2EntryCard/EntryCard';
import Features from './components/3Features/Features';
import AccountStatus from './components/4AccountStatus/AccountStatus';
import TokenStats from './components/5TokenStats/TokenStats';
import Referral from './components/6Referral/Referral';
import TreasuryStatus from './components/7TreasuryStatus/TreasuryStatus';
import Roadmap from './components/8Roadmap/Roadmap';

function App() {
  return (
    <div className="App">
      <Grid.Row cards deck> 

        <Grid.Col>
          
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

          <Container>
            <Roadmap/>
          </Container>
          
          </Grid.Col>



    </Grid.Row> 
    </div>
  );
}

export default App;
