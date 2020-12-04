import { TheDOM, DATA } from './TheDOM.js';
//THESE REFERENCES BECOME AVAILABLE ONLY WHEN LOADING IS COMPLETE
//DO NOT USE E.G. IN THE CONSTRUCTOR
import { loaderLoadedPicReferences } from './index.js';
import { loaderLoadedSvgHTML } from './index.js';


class Menu extends TheDOM {
	constructor() {
		super(DATA.MENU_SELECTOR);
        console.log('menu constructor here');
		console.log('menu element: ', this.element);
		console.log('menu this: ', this);
		this.boundFunction = null;		
	}

	handleStart() {
		this.element.removeEventListener('click', this.boundFunction);
		this.toggleVisibility(this.element, 'invisible');
		console.log('LET THE GAME COMMENCE!');
	}

	initializeMenu() {
		this.element.innerHTML = loaderLoadedSvgHTML[0];		
		this.boundFunction = this.handleStart.bind(this);		
		this.element.addEventListener('click', this.boundFunction);


		// let x = window.getComputedStyle(image).getPropertyValue('fill');
		// console.log('x', x)
		

    }
}

export const menu = new Menu();
