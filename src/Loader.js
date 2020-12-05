import { TheDOM, DATA } from './TheDOM.js';
import allPiecesPicHTML from './assets/pieces.svg';
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
		this.importedSvgHTML = [allPiecesPicHTML];
		this.importedPicReferences = [img1, img2, img3, img4, img5];
		this.allImportedItems = [...this.importedSvgHTML, ...this.importedPicReferences];
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
		console.log(newDiv);
		// debugger
		
	}

    finalItemLoaded() {
        console.log('ALL ITEMS LOADED');
		this.areAllItemsLoaded = true;
		// this.toggleVisibility(this.element, 'invisible');
		// window.dispatchEvent(new CustomEvent(ITEMSLOADED_EVENT_NAME));
	}	

	imageLoaded(event) {
		event.target.removeEventListener(event.type, this.imageLoaded, false);
		this.loadedItemsCounter++;
		event.target.style.left = `${this.loadedItemsCounter * 50}px`;
		const loadedFraction = Math.floor(this.loadedItemsCounter / this.allImportedItems.length * 100);
		console.log('FRACTION OF LOADED ITEMS: ', loadedFraction);
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

	insertPiece(piece, parent) {
		const chessPiece = document.getElementById(piece);
		const chessPieceDiv = document.createElement('div');
		parent.appendChild(chessPieceDiv);
		chessPieceDiv.setAttribute('class', 'chessPieceDiv');
		chessPieceDiv.innerHTML  = `<?xml version="1.0" standalone="no"?>
		<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="972.000000pt" viewBox="0 0 1280.000000 972.000000"
		 preserveAspectRatio="xMidYMid meet"> 
		<g transform="translate(0.000000,972) scale(0.100000,-0.100000)" fill="#f44336" stroke="none"> 
		${chessPiece.outerHTML}	</g></svg>`;
	}
    
    initializeLoader() {
		this.toggleVisibility(this.element, 'visible');
		this.width = this.element.getBoundingClientRect().width;
		this.height = this.element.getBoundingClientRect().height;
		// console.log('LOADER WIDTH: ', this.width);
		// console.log('LOADER HEIGHT: ', this.height);
		
		console.log('IMPORTED ITEMS: ', this.allImportedItems.length);
		// // this.consoleInitialInfo();
		this.resizeGameWindow();
		window.addEventListener('resize', this.resizeGameWindow);
		this.loadAllItems();
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
}

export const loader = new Loader();

export const ITEMSLOADED_EVENT_NAME = 'itemsLoaded';


//REMOVE THIS:
// this.element.style.backgroundPosition = `${this.width} center`;
// this.element.style.backgroundImage = `url('${loaderPic}')`;
// this.element.style.backgroundRepeat = "no-repeat";
// this.element.style.backgroundSize = this.width + 'px';	
