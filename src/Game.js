/* eslint-disable no-mixed-spaces-and-tabs */
import { TheDOM, DATA } from './TheDOM.js';
import { loaderLoadedSvgHTML } from './index.js';

class Game extends TheDOM {
	constructor() {
    super(DATA.MAINWRAP_SELECTOR);
    // console.log('game constructor here');
		// console.log('game element: ', this.element);
		// console.log('game this: ', this);
    }

    //ORIG KEEP
	  // <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="972.000000pt" viewBox="0 0 1280.000000 972.000000"
	  // 	 preserveAspectRatio="xMidYMid meet"> 
	  // 	<g transform="translate(0.000000,972) scale(0.100000,-0.100000)" fill="#f44336" stroke="none"> 

    insertPiece(piece, parent) {
      const chessPiece = document.getElementById(piece);
      const chessPieceDiv = document.createElement('div');
      parent.appendChild(chessPieceDiv);
      chessPieceDiv.setAttribute('class', 'chessPieceDiv');
      chessPieceDiv.innerHTML  = `<?xml version="1.0" standalone="no"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1000pt" height="1000pt" viewBox="0 0 350 500"
       preserveAspectRatio="xMidYMid meet"> 
      <g transform="translate(0.000000,972) scale(0.100000,-0.100000)" fill="#f44336" stroke="none"> ${chessPiece.outerHTML} </g></svg>`;
    }	

    displayAllPieces() {
      this.insertPiece("king1", this.element);
      this.insertPiece("queen1", this.element);
      this.insertPiece("bishop1", this.element);		
      this.insertPiece("knight1", this.element);
      this.insertPiece("rook1", this.element);
      this.insertPiece("pawn1", this.element);
      this.insertPiece("pawn2", this.element);		
      this.insertPiece("rook2", this.element);		
      this.insertPiece("knight2", this.element);		
      this.insertPiece("bishop2", this.element);		
      this.insertPiece("queen2", this.element);		
      this.insertPiece("king2", this.element);	
    }

    initializeGame() {
      this.toggleVisibility(this.element, 'visible');      
      console.log('GAME STARTING... ');
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

