import { TheDOM, DATA } from './TheDOM.js';
//THESE REFERENCES BECOME AVAILABLE ONLY WHEN LOADING IS COMPLETE - DO NOT USE IN CONSTRUCTOR
import { loaderLoadedSvgHTML } from './index.js';

class Menu extends TheDOM {
	constructor() {
		super(DATA.MENU_SELECTOR);
        // console.log('menu constructor here');
		// console.log('menu element: ', this.element);
		// console.log('menu this: ', this);
		this.boundFunction = null;
		//NEED clickEventTarget BECAUSE PATH BECOMES THE EVENT TARGET AND EVENT LISTENER IS NOT REMOVED!
		this.clickEventTarget = null;
	}

	handleStart(event) {
		//WHY DOES EVENT TARGET SHIFT FROM DIV TO PATH?
		this.clickEventTarget.removeEventListener(event.type, this.boundFunction);
		this.toggleVisibility(this.element, 'invisible');
		// console.log('LET THE GAME COMMENCE!');
		window.dispatchEvent(new CustomEvent(DATA.STARTGAME_EVENT_NAME));
		// console.log('EVENT TARGET AFTER CLICK:', event.target);
		// console.log('EVENT TYPE:', event.type);
	}

	insertPlayButton() {
		const newDiv = document.createElement('div');
		newDiv.classList.add('playBtnDiv');
		newDiv.innerHTML = loaderLoadedSvgHTML[1];
		this.element.appendChild(newDiv);
		this.clickEventTarget = newDiv;
		this.boundFunction = this.handleStart.bind(this);	
		this.clickEventTarget.addEventListener('click', this.boundFunction);
		// console.log('EVENT TARGET BEFORE CLICK:', this.clickEventTarget);
	}

	initializeMenu() {
		this.insertPlayButton();		
    }
}

export const menu = new Menu();


		
