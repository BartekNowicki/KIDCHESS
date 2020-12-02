import { TheDOM, DATA } from './TheDOM.js';

class Game extends TheDOM {
	constructor() {
        super(DATA.MAINWRAP_SELECTOR);
        console.log('game constructor here');
		console.log('game element: ', this.element);
		console.log('game this: ', this);
    }
}

export const game = new Game();

