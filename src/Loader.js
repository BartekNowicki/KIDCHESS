import { TheDOM, DATA } from './TheDOM.js';
import loaderPicHTML from './assets/king.svg';
import startPicHTML from './assets/start.svg';
import piecesPicHTML from './assets/pieces.svg';
import kingPicHTML from './assets/king.svg';
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
		this.importedSvgHTML = [loaderPicHTML, startPicHTML, piecesPicHTML, kingPicHTML];
		this.importedPicReferences = [img1, img2, img3, img4, img5];
		this.importedPics = [];
		this.width = 0;
		this.height = 0;
        this.initializeLoader();
	}

	resizeGameWindow() {
		const { innerWidth: width, innerHeight: height } = window;
		const scale = Math.min(width / DATA.CANVAS_BASE_WIDTH, height / DATA.CANVAS_BASE_HEIGHT);
		console.log(width, height, DATA.CANVAS_BASE_WIDTH, DATA.CANVAS_BASE_HEIGHT);		
		document.documentElement.style.setProperty("--scaleValue", scale);
		console.log('GAME WINDOW RESIZED AGAINST BASE 360 X 640 BY SCALE: ', scale);
		
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
		this.importedPics.forEach(item => {
			this.toggleVisibility(item, 'invisible');
			});
		this.toggleVisibility(this.element, 'invisible');
		//START TEST IF IT BECOMES INVISIBLE
		// const displayProp = window.getComputedStyle(this.element).getPropertyValue('display');
		// console.log(displayProp);
		//END TEST IF IT BECOMES INVISIBLE
		window.dispatchEvent(new CustomEvent(ITEMSLOADED_EVENT_NAME));
	}	

	itemLoaded(event) {
		// console.log('loaded item: ', event.target);
		event.target.removeEventListener(event.type, this.itemLoaded, false);
		this.loadedItemsCounter++;
		const loadedFraction = this.loadedItemsCounter / this.importedPicReferences.length;
		this.element.style.backgroundPosition = `${this.width * (1 - loadedFraction)}px center`;
		console.log('FRACTION OF LOADED ITEMS: ', loadedFraction);
		// this.element.innerHTML += this.loadedItemsCounter;
		// event.target.classList.add('loadingTest');
		event.target.setAttribute('class', 'loadingTest');
		event.target.style.left = `${this.loadedItemsCounter * 60}px`;
		this.element.appendChild(event.target);
		this.importedPics.push(event.target);

		if (this.loadedItemsCounter === this.importedSvgHTML.length) {
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
		this.width = this.element.getBoundingClientRect().width;
		this.height = this.element.getBoundingClientRect().height;
		// console.log('LOADER WIDTH: ', this.width);
		// console.log('LOADER HEIGHT: ', this.height);

		this.element.innerHTML = loaderPicHTML;
		// console.log(this.element.innerHTML);
		
		// this.element.style.backgroundPosition = `${this.width} center`;
		// this.element.style.backgroundImage = `url('${loaderPic}')`;
		// this.element.style.backgroundRepeat = "no-repeat";
		// this.element.style.backgroundSize = this.width + 'px';		
		// // this.consoleInitialInfo();
		this.resizeGameWindow();
		window.addEventListener('resize', this.resizeGameWindow);
		for (let i = 0; i < this.importedPicReferences.length; i++) {
			this.loadImage(this.importedPicReferences[i]);
			//loadImage returns an image, use it if needed
		}
    }
}

export const loader = new Loader();

export const ITEMSLOADED_EVENT_NAME = 'itemsLoaded';
