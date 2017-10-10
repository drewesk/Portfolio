import React, { Component } from 'react';
import Mailto from 'react-mailto.js';
import {Card, Segment, Icon, Form, Input, Button, Header, Divider} from 'semantic-ui-react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { postMessage } from '../axios/requests';

@observer
export class Contact extends Component {
  @observable offMount = false;
  @observable requestBody = {
    name: '',
    contact: '',
    body: ''
  }

  onHandleInput(event){
    const target = event.target;
    const name = target.id;

    this.requestBody[name] = target.value;
  }

  onSubmitForm() {
    const reqBody = {};

    for(let prop in this.requestBody) {
      if (this.requestBody[prop] === '') {
        alert('Please fill out all items.');
        return false
      } else {
        reqBody[prop] = this.requestBody[prop];
      }
    }

    postMessage(reqBody).then((response) => {
      console.log(response);
      this.offMount = true;
    });

  }

  render() {
    return (
      <Card>
        <Segment inverted>
          <Header as='h1'>Contact</Header>
          <Divider inverted section />
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


        {(this.offMount === false) ?
        <Form inverted>
          <Form.Field id="name" control={Input} label='Name' placeholder='Name'
            onChange={(event) => {
                 this.onHandleInput(event)
               }} />
          <Form.Field id="contact" control={Input} label='Contact Info' placeholder='Contact Info'
            onChange={(event) => {
                 this.onHandleInput(event)
               }} />
          <Form.Field id="body" control={Input} label='Message' placeholder='write me a poem... or a simple message'
            onChange={(event) => {
                 this.onHandleInput(event)
               }} />
          <Form.Field id="form-input-control-opinion" control={Button} content='Send It Through the Interwebs!' color='olive'
            onClick={ this.onSubmitForm.bind(this) }/>

        </Form>
        : (<p>Success!</p>) }
      </Segment>
      </Card>
    );
  }
}
