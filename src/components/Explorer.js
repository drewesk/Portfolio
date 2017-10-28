import React, {Component} from 'react';

const { ChessBoard } = window;

export class Explorer extends Component {
  constructor(props) {
    super();

    this.state = {
      position: 'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR',
      orientation: 'black',
      draggable: true,
      dropOffBoard: 'trash',
      sparePieces: true,
      flip: false
    };
  }

  componentDidMount() {

    let boardExplore = ChessBoard('explore-board', {
      position: this.state.position,
      orientation: this.state.orientation,
      draggable: this.state.draggable,
      dropOffBoard: this.state.dropOffBoard,
      sparePieces: this.state.sparePieces
    });

    return boardExplore;
  }

  onFlipBoard() {
    let flipBool = !this.state.flip;

    this.setState({
      flip: flipBool
    })
    console.log(this.state.flip);

    if(this.state.flip) {
      this.setState(
        {orientation: 'white'});
    } else {
      this.setState({
        orientation: 'black'
      });
    }
  }

  render() {

    return(
    <div className="explorer-container">
      <div id='explore-board' style={{width: 600 + 'px'}}></div>
    </div>
    );
  }
}
