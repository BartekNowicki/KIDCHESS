import { TheDOM, DATA } from './TheDOM.js';
//THESE REFERENCES BECOME AVAILABLE ONLY WHEN LOADING IS COMPLETE
//DO NOT USE E.G. IN THE CONSTRUCTOR
import { loaderLoadedReferences } from './index.js';

class Menu extends TheDOM {
	constructor() {
		super(DATA.MENU_SELECTOR);
        console.log('menu constructor here');
		console.log('menu element: ', this.element);
		console.log('menu this: ', this);
		this.boundFunction = null;		
	}

	handleStart() {
		//WHY DOES THIS LISTENER NOT GO AWAY??
		this.element.removeEventListener('click', this.boundFunction);
		this.toggleVisibility(this.element, 'invisible');
		console.log('LET THE GAME COMMENCE!');
	}

	initializeMenu() {
		this.element.style.backgroundPosition = `center`;
		this.element.style.backgroundRepeat = "no-repeat";
		this.element.style.backgroundSize = "50%";
		this.element.style.backgroundImage = `url('${loaderLoadedReferences[1]}')`;
		this.boundFunction = this.handleStart.bind(this);		
		this.element.addEventListener('click', this.boundFunction);
    }
}

export const menu = new Menu();
