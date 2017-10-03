import React, { Component } from 'react';
import { List, Card } from 'semantic-ui-react';

export class Projects extends Component {
  render() {
    return (
      <Card>
        <List>
          <List.Item icon='bullseye' content={<a href='https://chessexp-c4173.firebaseapp.com/'>ChessEXP</a>} />
          <List.Item icon='bullseye' content={<a href='http://main.betaclimb.rocks/'>BetaClimb Desktop</a>} />
          <List.Item icon='bullseye' content={<a href='http://betaclimb.rocks/'>BetaClimb Native (iOS, Android)</a>} />
          <List.Item icon='bullseye' content={<a href='https://dialoc-e341d.firebaseapp.com/'>DIALOC</a>} />
          <List.Item icon='bullseye' content={<a href='https://chess-x.herokuapp.com/'>ChessX</a>} />
        </List>  
      </Card>
    );
  }
}
