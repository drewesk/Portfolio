import React, { Component } from 'react';

import _ from 'lodash'
import {
  Button, Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility, Card
} from 'semantic-ui-react'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: 'black',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/assets/images/chessman.jpg'
    // style={{ margin: '2em -4em 2em 2em' }}
  />
)


const Paragraph = (i) => (
  <article>

    <h2>{['Learning Koa in 2 Weeks', 'The Journey into WebVR', 'MobX for the \'Single Source of Truth\''][i]}</h2>
    <p>
      {[
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
        'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
        'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
        'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
        'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
        'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
        'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
        'accumsan porttitor, facilisis luctus, metus',
      ].join('')}
    </p>

  </article>
)

export class Body extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    mountProjects: false,
    mountContact: false,
    mountBlog: true,
    mountGit: false
  }

  onMountProjects() {
    this.setState({
      mountProjects: true,
      mountContact: false,
      mountBlog: false
    })
  }

  onMountContact() {
    this.setState({
      mountContact: true,
      mountProjects: false,
      mountBlog: false
    })
  }

  onMountBlog() {
    this.setState({
      mountContact: false,
      mountProjects: false,
      mountBlog: true
    })
  }

  onMountGit() {
    this.setState({
      mountContact: false,
      mountProjects: false,
      mountBlog: false,
      mountGit: true
    })
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (
      <div>
        <Segment className='header-segment' inverted>
          <Container className='header-wrapper' text >
            <Image className='header-image' src='../assets/images/brand.png' />
            <Header className='header-name' as='h1' color='olive'>Andrew Eskenazi</Header>
          </Container>
        </Segment>


        <Container className='body-content' text>

          <Card raised='true' className='card-about'>

            <Card.Content>
              <Card.Header>About</Card.Header>
              <Card.Description>
                <RightImage />
                Strip steak short loin pastrami ham hock flank prosciutto turkey cow venison chicken ground round shank.
                Ball tip turkey tri-tip, meatball shankle shank andouille porchetta strip steak pork belly salami bacon
                boudin. Boudin porchetta sirloin venison cow.
              </Card.Description>
            </Card.Content>
          </Card>

          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />

          <div
            ref={this.handleOverlayRef}
            style={overlayFixed ? fixedOverlayStyle : overlayStyle}
          >
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
              <a href="https://github.com/drewesk" target='_blank'>
                <Menu.Item onClick>
                  <Icon name='github alternate' />
                  GitHub
                </Menu.Item>
              </a>

            <Menu.Item onClick={ this.onMountBlog.bind(this) }>
              <Icon name='indent' />
              Articles
            </Menu.Item>

              <Menu.Item onClick={ this.onMountProjects.bind(this) }>
                <Icon name='unhide' />
               Projects
              </Menu.Item>

              <Menu.Item>
                <Icon name='mail' />
               Email
              </Menu.Item>
            </Menu>
          </div>

          { (this.state.mountBlog) ? _.times(3, i => {
            return Paragraph(i)
          })
        : ''}

        {/* { (this.state.mountGit) ?
          <iframe src="http://www.github.com/drewesk/" frameBorder="0"></iframe>
      : ''} */}

        { (this.state.mountProjects) ?
          <p>This is a list of Projects</p>
      : ''}

        { (this.state.mountContact) ?
          <p>This is a contact form</p>
      : ''}

        </Container>

        <Segment
          inverted
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
          vertical
        >
          <Container textAlign='center'>
            <Divider inverted section />
            &copy; 2017 Andrew Eskenazi
          </Container>
        </Segment>
      </div>
    );
  }
}
