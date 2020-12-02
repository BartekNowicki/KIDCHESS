import { TheDOM, DATA } from './TheDOM.js';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';

class Loader extends TheDOM {
	constructor() {
        super(DATA.LOADER_SELECTOR);
        this.areAllItemsLoaded = false;
		this.loadedItemsCounter = 0;
		this.importedReferences = [img1, img2, img3, img4, img5];
		this.importElements = [];
        this.initializeLoader();
	}

	resizeGameWindow() {
		const { innerWidth: width, innerHeight: height } = window;
		const scale = Math.min(width / DATA.CANVAS_BASE_WIDTH, height / DATA.CANVAS_BASE_HEIGHT);
		// console.log(width, height, DATA.CANVAS_BASE_WIDTH, DATA.CANVAS_BASE_HEIGHT);		
		document.documentElement.style.setProperty("--scaleValue", scale);
		console.log('GAME WINDOW RESIZED AGAINST BASE 360 X 640 BY SCALE: ', scale);
		
	}

	bindWithElements() {
		// this.someElement = this.bindWithElement(selector);		
	}

	loadImage(imageUrl) {
		// console.log('trying to load: ', imageUrl);
		const image = new Image();
		image.src = imageUrl;
		// console.log('image source: : ', image.src);
		image.addEventListener('load', event => this.itemLoaded(event), false);        
		return image;
	}

    finalItemLoaded() {
        console.log('ALL ITEMS LOADED');
		this.areAllItemsLoaded = true;
		this.importElements.forEach(item => {
			console.log(item);
			this.toggleVisibility(item, 'invisible');
			});
		this.toggleVisibility(this.element, 'invisible');
		// console.log(this.element);
		window.dispatchEvent(new CustomEvent(ITEMSLOADED_EVENT_NAME));
	}	

	itemLoaded(event) {
		// console.log('loaded: ', event.target);
		event.target.removeEventListener(event.type, this.itemLoaded, false);
		this.loadedItemsCounter++;
		// this.element.innerHTML += this.loadedItemsCounter;
		// event.target.classList.add('loadingTest');
		event.target.setAttribute('class', 'loadingTest');
		event.target.style.left = `${this.loadedItemsCounter * 60}px`;
		this.element.appendChild(event.target);
		this.importElements.push(event.target);
		if (this.loadedItemsCounter === this.importedReferences.length) {
			this.finalItemLoaded();
		}
	}	

    consoleInitialInfo() {
        console.log('loader constructor here');
		console.log('loader element: ', this.element);
        console.log('loader this: ', this);
    }
    
    initializeLoader() {
		this.toggleVisibility(this.element, 'visible');
		// this.bindWithElements();
		// this.consoleInitialInfo();
		this.resizeGameWindow();
		window.addEventListener('resize', this.resizeGameWindow);
		for (let i = 0; i < this.importedReferences.length; i++) {
			this.loadImage(this.importedReferences[i]);
			//loadImage returns an image, use it if needed
		}

    }
}

export const loader = new Loader();

export const ITEMSLOADED_EVENT_NAME = 'itemsLoaded';