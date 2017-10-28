import React, { Component } from 'react';
import { Header, List, Card, Label, Segment, Divider} from 'semantic-ui-react';

export class Projects extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <Card className='projects-card card-left'>
          <Segment inverted>
            <Header as='h1'>Projects</Header>
            <Divider inverted section />
            <List>
              <List.Item icon='bullseye' content={<a href='https://chessexp-c4173.firebaseapp.com/'>ChessEXP</a>} />
              <List.Item icon='bullseye' content={<a href='http://main.betaclimb.rocks/'>BetaClimb Desktop</a>} />
              <List.Item icon='bullseye' content={<a href='http://betaclimb.rocks/'>BetaClimb Native (iOS, Android)</a>} />
              <List.Item icon='bullseye' content={<a href='https://dialoc-e341d.firebaseapp.com/'>DIALOC</a>} />
              <List.Item icon='bullseye' content={<a href='https://chess-x.herokuapp.com/'>ChessX</a>} />
            </List>
          </Segment>
        </Card>

        <Card className='projects-card card-right'>
          <Segment inverted>
            <Header as='h1'>Skills</Header>
            <Divider inverted section />


          <Header as='h3'>Frontend</Header>

          <Label size='medium' color='blue'>React/MobX</Label>
          <Label size='medium' color='orange'>ES2015-17</Label>
          <Label size='medium' color='teal'>HTML5</Label>
          <Label size='medium' color='red'>CSS</Label>

          <Header as='h3'>Backend</Header>

          <Label size='medium' color='blue'>Node.js</Label>
          <Label size='medium' color='teal'>Koa</Label>
          <Label size='medium' color='red'>Express</Label>
          <Label size='medium' color='orange'>Objection.js</Label>
          <Label size='medium' color='olive'>PostgreSQL</Label>
          <Label size='medium' color='green'>MongoDB</Label>
          <Label size='medium' color='violet'>Ruby</Label>
          <Label size='medium' color='purple'>RoR</Label>
          <Label size='medium' color='blue'>Java</Label>
          <Label size='medium' color='pink'>C#</Label>

          <Header as='h3'>testing</Header>

          <Label size='medium' color='pink'>Mocha</Label>
          <Label size='medium' color='olive'>Chai</Label>
          <Label size='medium' color='brown'>RSpec</Label>
          <Label size='medium' color='red'>Nightwatch.js</Label>

          <Header as='h3'>Methods</Header>

          <Label size='medium' color='orange'>Agile</Label>
          <Label size='medium' color='blue'>Standup Meetings</Label>
          <Label size='medium' color='teal'>API/GUI Integration</Label>
          <Label size='medium' color='blue'>OOP Concepts</Label>
          <Label size='medium' color='purple'>Pair Programming</Label>

          <Header as='h3'>CLI</Header>

          <Label size='medium' color='brown'>Git/Zsh/VIM</Label>
          </Segment>
        </Card>

      </div>
    );
  }
}
