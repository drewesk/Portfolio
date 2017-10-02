import React, { Component } from 'react';
import Mailto from 'react-mailto.js';
import {Icon} from 'semantic-ui-react';

export class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">

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

      </div>
    );
  }
}
