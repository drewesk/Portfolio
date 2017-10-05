import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react';

export class GridTest extends Component {
  render() {
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column>this is the first Column</Grid.Column>
          <Grid.Column>Second Column</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Test</Grid.Column>
          <Grid.Column>Test</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
