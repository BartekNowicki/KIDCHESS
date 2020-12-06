export const DATA = {
	HIDDEN_CLASS: "hidden",
	LOADER_SELECTOR: "[data-loader]",
	MENU_SELECTOR: "[data-menu]",
	MAINWRAP_SELECTOR: "[data-mainWrap]",
	//THESE DIMENTIONS ALSO SET IN SCSS MAINWRAP FOR SCALING
	CANVAS_BASE_WIDTH: 640,
	CANVAS_BASE_HEIGHT: 360,
	ITEMSLOADED_EVENT_NAME: 'itemsLoaded',
    STARTGAME_EVENT_NAME: 'gameStartRequested',
}

export class TheDOM {
	constructor(selector) {
		if (typeof selector === 'undefined') return console.warn("undefined selector!");
		this.domSelectors = { visibilityToggleTest: ".visibilityTest", }
		this.element = this.bindWithElement(selector);
		this.visibilityToggleTestElement = this.bindWithElement(this.domSelectors.visibilityToggleTest);
		//MUST BE IN THE CONSTRUCTOR AS INHERITORS WILL NOT PERFORM METHODS:
		this.toggleVisibility(this.visibilityToggleTestElement, 'invisible');
		this.initializeTheDOM(selector);		
	}

	bindWithElement(domSelector) {
		const element = document.querySelector(domSelector);
		if (!element) {
			throw new Error(`ERROR: unable to bind with: ${domSelector}`);
		}
		return element;
	}

	toggleVisibility(element, mode) {
		mode === 'invisible'
			? element.classList.add(DATA.HIDDEN_CLASS)
			: element.classList.remove(DATA.HIDDEN_CLASS);
	}

	visibilityToggleTest() {
	console.log('visibilityToggleTestElement :', this.visibilityToggleTestElement);
	console.log('performing visibilityTest - this element should get display none: ', this.visibilityToggleTestElement);
	}

	initializeTheDOM(receivedDomSelector) {
		// this.visibilityToggleTest();		
		console.log('TheDOM constructor here, called by', this, 'received selector: ', receivedDomSelector);
		console.log('binding the calling instance with:', this.element);
	}
}