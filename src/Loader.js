/* eslint-disable no-mixed-spaces-and-tabs */
import { TheDOM, DATA } from './TheDOM.js';
import loaderHTML from './assets/loader.svg'
import startPicHTML from './assets/start.svg';
import kingHTML from './assets/king.svg'; 
import queenHTML from './assets/queen.svg'; 
import rookHTML from './assets/rook.svg'; 
import pawnHTML from './assets/pawn.svg'; 
import knightHTML from './assets/knight.svg'; 
import bishopHTML from './assets/bishop.svg';
import bulletHTML from './assets/bullet.svg'; 
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';

class Loader extends TheDOM {
	constructor() {
        super(DATA.LOADER_SELECTOR);
        this.areAllItemsLoaded = false;
		this.loadedItemsCounter = 0;
		this.importedSvgHTML = [loaderHTML, startPicHTML, kingHTML, queenHTML, rookHTML, pawnHTML, bishopHTML, knightHTML, bulletHTML];
		this.importedPicReferences = [img1, img2];
		this.allImportedItems = [...this.importedSvgHTML, ...this.importedPicReferences];
		this.width = 0;
		this.height = 0;
        this.initializeLoader();
	}	

	resizeGameWindow() {
		const { innerWidth: width, innerHeight: height } = window;
		const scale = Math.min(width / DATA.CANVAS_BASE_WIDTH, height / DATA.CANVAS_BASE_HEIGHT);
		console.log('RESIZING: ', width, height, DATA.CANVAS_BASE_WIDTH, DATA.CANVAS_BASE_HEIGHT);
		document.documentElement.style.setProperty("--scaleValue", scale);
		// console.log('GAME WINDOW RESIZED AGAINST BASE 360 X 640 BY SCALE: ', scale);
	}

	loadImage(imageReference) {		
		const image = new Image();
		image.src = imageReference;
		image.setAttribute('class', 'loadingTest');		
		this.element.appendChild(image);
		image.addEventListener('load', event => this.imageLoaded(event), false); 
	}

	loadSvg(svgHTML) {		
		const newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'loadingTest');
		newDiv.innerHTML = svgHTML;
		newDiv.style.left = `${this.loadedItemsCounter * 0}px`;
		this.element.appendChild(newDiv);
		this.loadedItemsCounter++;
		// console.log('LOADED HTML: ', newDiv.innerHTML);
		// console.log(newDiv);		
	}

    finalItemLoaded() {
        // console.log('ALL ITEMS LOADED');
		this.areAllItemsLoaded = true;
		this.toggleVisibility(this.element, 'invisible');
		window.dispatchEvent(new CustomEvent(DATA.ITEMSLOADED_EVENT_NAME));
	}	

	imageLoaded(event) {
		event.target.removeEventListener(event.type, this.imageLoaded, false);
		this.loadedItemsCounter++;
		event.target.style.left = `${this.loadedItemsCounter * 50}px`;
		const loadedFraction = Math.floor(this.loadedItemsCounter / this.allImportedItems.length * 100);
		// console.log('FRACTION OF LOADED ITEMS: ', loadedFraction);
		let loaderInfoMessage = "'loading pieces...'" + `"  ${loadedFraction} %"`;
		document.documentElement.style.setProperty("--loaderInfo", `${loaderInfoMessage}`);
		
		if (this.loadedItemsCounter === this.allImportedItems.length) {
			this.finalItemLoaded();
		}
	}	
	
    consoleInitialInfo() {
        console.log('loader constructor here');
		console.log('loader element: ', this.element);
        console.log('loader this: ', this);
	}	

	loadAllItems() {
		for (let i = 0; i <= this.importedPicReferences.length - 1; i++) {
			this.loadImage(this.importedPicReferences[i]);			
		}
		for (let j = 0; j <= this.importedSvgHTML.length - 1; j++) {
			this.loadSvg(this.importedSvgHTML[j]);			
		}
	}
	    
    initializeLoader() {
		this.toggleVisibility(this.element, 'visible');
		this.element.innerHTML = loaderHTML;
		this.width = this.element.getBoundingClientRect().width;
		this.height = this.element.getBoundingClientRect().height;
		// console.log('LOADER WIDTH: ', this.width);
		// console.log('LOADER HEIGHT: ', this.height);		
		// console.log('NUMBER OF IMPORTED ITEMS: ', this.allImportedItems.length);
		// // this.consoleInitialInfo();
		this.resizeGameWindow();
		window.addEventListener('resize', this.resizeGameWindow);
		this.loadAllItems();
    }
}

export const loader = new Loader();



