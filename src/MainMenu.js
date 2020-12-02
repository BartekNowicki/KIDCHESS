import { TheDOM, DATA } from './TheDOM.js';

class MainMenu extends TheDOM {
	constructor() {
		//SUPER WILL BIND THE MAINMENU-EXTENDS-THEDOM INSTANCE WITH THE MAIN WRAPPER
        super(DATA.MAINMENU_SELECTOR);
        console.log('MainMenu constructor here');
		console.log('mainMenu element: ', this.element);
		console.log('mainMenu this: ', this);
	}
}

export const mainMenu = new MainMenu();

export const SCALE_VALUE = 1;