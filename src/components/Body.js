import React, { Component } from 'react';

import _ from 'lodash'
import {
  Container, Divider, Header, Icon, Image, Segment, Visibility, Card, Menu, Button
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

export class Body extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    mountGit: false,
    mountTerm: false
  }

  onToggleDark() {
    document.body.classList.contains('dark-mode') ?
    document.body.classList.remove('dark-mode')
    : document.body.classList.add('dark-mode')
    console.log(document.body);
  }

  openTerm(){
    this.setState({
      mountTerm: true
    });
  }

  // onMountBlog() {
  //   this.setState({
  //     mountProjects: false,
  //     mountBlog: true
  //   })
  // }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { overlayFixed, overlayRect } = this.state

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
            <Segment inverted>
              <Header as='h3'>About</Header>

              <Card.Content>
                My experience ranges from working on
                Civic Apps through the Code for America Brigade
                as well as my own projects.
                Tinkering around and writing self-documenting code is what I'm passionate about most.
                Also obsessed with chess. Have been in a few tournaments as well as 8000+ online games over the past few years.
              </Card.Content>
              <Card.Content extra>
                <a href="https://youtu.be/iRrQVx4E4iA?t=30m57s">Capstone Presentation</a>
              </Card.Content>
            </Segment>
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
              inverted
            >

            <Menu.Item>
              <Icon name='bicycle' />
              {/* <Divider></Divider> */}
              <Icon name='code' />
              <Icon name='arrow down' />
            </Menu.Item>

            {/* <Menu.Item onClick={ this.onMountBlog.bind(this) }>
              <Icon name='indent' />
              Articles
            </Menu.Item> */}

            </Menu>
          </div>

          {/* { (this.state.mountBlog) ? _.times(1, i => {
            return Paragraph(i)
          })
        : ''} */}

        <span>
          <Projects />
          <Contact />
          <Card raised={true}>
            <Segment inverted>
              <Header as='h1'>Invaders</Header>
              <Divider inverted section />
              <Button.Group>
                <a href="javascript:termOpen()" className="termopen">
                <Button color='olive' onClick={ this.openTerm.bind(this) } inverted>
                  Open Terminal
                </Button>
              </a>
                <Button.Or text='and' />
              <a href="javascript:test('invaders')" className="termopen">
                <Button color='teal' inverted>
                  Play
                </Button>
              </a>
              </Button.Group>
            </Segment>
          </Card>
          {(this.state.mountTerm) ?
            (<Card raised={true} className='terminal-card'>
              <Segment inverted>
                <Divider inverted section />
                <div id="termDiv" ></div>
              </Segment>
            </Card>)
            :
            ''
          }
        </span>
        </Container>



        <Segment
          inverted
          style={{ margin: '5em 0em 0em', padding: '5em 0em', marginBottom: '-20%' }}
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
