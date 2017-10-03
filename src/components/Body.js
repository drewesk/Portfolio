import React, { Component } from 'react';

import _ from 'lodash'
import {
  Button, Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility, Card
} from 'semantic-ui-react'

import { Contact } from './Contact';
import { Projects } from './Projects';

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/assets/images/chessman.jpg'
  />
)

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
  transition: 'left 1.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const Paragraph = (i) => (
  <article key={i} className='article-wrapper'>

    <h2>{['Koa, the Express Train has Left the Station']}</h2>
    <h4>{['Sun Oct 1st']}</h4>
    <p>
      {[
        'I finally made the leap of faith and jumped right into Koa, which is more of a blank canvas than Express. No more repetitively typing out req.body or all of the built-in middleware. Async awaits made promises a cinch as well as using Mocha/Chai for some TDD. One of the major advantages is that you can go super light weight. It was also fun introducing Objection.js to manage table joins.',
      ]}
    </p>

  </article>
)

export class Body extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    mountProjects: true,
    mountBlog: false,
    mountGit: false
  }

  onToggleDark() {
    document.body.classList.contains('dark-mode') ?
    document.body.classList.remove('dark-mode')
    : document.body.classList.add('dark-mode')
    console.log(document.body);
  }

  onMountProjects() {
    this.setState({
      mountProjects: true,
      mountBlog: false
    })
  }

  onMountBlog() {
    this.setState({
      mountProjects: false,
      mountBlog: true
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
          {/* <Button onClick={ this.onToggleDark.bind(this) }>Dark Mode</Button> */}
          <Container className='header-wrapper' text >
            <Image className='header-image' src='../assets/images/brand.png' />
            <Header className='header-name' as='h1' color='olive'>Andrew Eskenazi</Header>
          </Container>
        </Segment>


        <Container className='body-content' text>

          <RightImage />

          <Card raised={true} className='card-about'>

            <Card.Content>
              <Card.Header>About</Card.Header>
              A software developer with a year and a half of coding experience.
              I've worked on civic Apps through the Code for America Brigade as well as working on my own projects.
              Also am obsessed with chess! Have been in a few tournaments as
              well as 4000+ online blitz games within the last 12 months.
            </Card.Content>
            <Card.Content extra>
              <Contact />
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

            <Menu.Item onClick={ this.onMountProjects.bind(this) }>
              <Icon name='unhide' />
              Projects
            </Menu.Item>

            <Menu.Item onClick={ this.onMountBlog.bind(this) }>
              <Icon name='indent' />
              Articles
            </Menu.Item>

            </Menu>
          </div>

          { (this.state.mountBlog) ? _.times(1, i => {
            return Paragraph(i)
          })
        : ''}

        { (this.state.mountProjects) ?
          <Projects />
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
