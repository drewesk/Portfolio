import React, { Component } from 'react';
import Mailto from 'react-mailto.js';
import {Card, Segment, Icon, Form, Input, Button} from 'semantic-ui-react';

export class Contact extends Component {
  render() {
    return (
      <Card>
        <Segment inverted>
          <a href="https://github.com/drewesk" rel="noopener noreferrer" target='_blank'>
          <Icon name='github alternate' />
        </a>
        <a href="https://www.linkedin.com/in/drewesk/" rel="noopener noreferrer" target='_blank'>
        <Icon name='linkedin' />
      </a>

      <Mailto
        secure={true}
        to='DrewEsk@gmail.com'
        subject="Contact"
        body={[
          "Hello,",

        ].join('\n')}
        >
          <Icon name='mail outline'/>
        </Mailto>
        <Form inverted>
          <Form.Field id="form-input-control-first-name" control={Input} label='Name' placeholder='Name'/>
          <Form.Field id="form-input-control-last-name" control={Input} label='Contact' placeholder='Contact'/>
          <Form.Field id="form-input-control-opinion" control={Input} label='Message' placeholder='write me a poem... or a simple message'/>
          <Form.Field id="form-input-control-opinion" control={Button} content='Send It Through the Interwebs!' color='olive'/>
        </Form>
      </Segment>
      </Card>
    );
  }
}
