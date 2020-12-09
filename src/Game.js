/* eslint-disable no-mixed-spaces-and-tabs */
import { TheDOM, DATA } from './TheDOM.js';
import { board } from './Board.js';

class Game extends TheDOM {
	constructor() {
    super(DATA.MAINWRAP_SELECTOR);
    // console.log('game constructor here');
		// console.log('game element: ', this.element);
    // console.log('game this: ', this);
    this.board = board;
    }

    initializeGame() {
      this.toggleVisibility(this.element, 'visible');      
      this.board.initializeBoard();
      // make cell class
      // make piece class
      // create board based on the cell class
      // create pieces as instances of the piece class
      // slide pieces on the board with intro animation
      // assign each cell who the occupier is

      //what about this one:?
      // this.displayAllPieces();      
      }
}

export const game = new Game();

