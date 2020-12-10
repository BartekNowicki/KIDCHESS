import './sass/index.scss';
import { DATA } from './TheDOM.js';
//IMPORTING EXPORTED INSTANCES, CONSTRUCTOR CALLED UPON EXPORT
//WHEN LOADING IS COMPLETE LOADER DISPATCHES AN EVENT AND INDEX MOVES ON
import { loader } from './Loader.js';
import { menu } from './Menu.js';
import { game } from './Game.js';

const loadingCallback = () => {
    // console.log('EVENT NOTED: ', DATA.ITEMSLOADED_EVENT_NAME);
    unsetListener(DATA.ITEMSLOADED_EVENT_NAME, loadingCallback);
    //CANNOT INITIALIZE BEFORE LOADER COMPLETE:
    menu.initializeMenu(); 
    // testFunction();
}

const startingGameCallback = () => {
    // console.log('EVENT NOTED: ', DATA.STARTGAME_EVENT_NAME);
    game.initializeGame();     
}

const setListener = (eventName, callback) => {
    // console.log('WAITING FOR EVENT CALLED: ', eventName);
    window.addEventListener(eventName, callback);
}

const unsetListener = (eventName, callback) => {
    window.removeEventListener(eventName, callback);
}

setListener(DATA.ITEMSLOADED_EVENT_NAME, loadingCallback);
setListener(DATA.STARTGAME_EVENT_NAME, startingGameCallback);

//WHEN THE GAME ENDS MAKE SURE TO REMOVE:
//window.removeEventListener('resize', loader.resizeGameWindow);

console.log('INDEX COMPLETED IMPORTS');

// let jestTestingVariable = 999;
// const indexJestTestFunction = () => jestTestingVariable;
// export default indexJestTestFunction;
export const loaderLoadedPicReferences = loader.importedPicReferences;
export const loaderLoadedSvgHTML = loader.importedSvgHTML;
export const loaderDimentions = { width: loader.width, height: loader.height };
export const allCells = game.board.cells;
export const allPieces = game.board.pieces;

