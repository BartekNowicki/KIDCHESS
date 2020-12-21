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
    this.currentTurnObject = { turnFirstPlayer: true };
    }

    initializeGame(gameNumber) {
      this.toggleVisibility(this.element, 'visible');      
      this.board.initializeBoard(gameNumber);
      //NEED THIS HERE FOR REMATCHES
      this.currentTurnObject = { turnFirstPlayer: true };
      }
    
    
}

export const game = new Game();

export const currentTurn = game.currentTurnObject;

