/* eslint-disable no-unused-vars */
// git push -u origin main

import './sass/index.scss';
//IMPORTING AN EXPORTED INSTANCE, CONSTRUCTOR CALLED ON EXPORT:
import { loader } from './Loader.js';

import { ITEMSLOADED_EVENT_NAME } from './Loader.js';

const loadingCallback = () => {
    console.log('EVENT NOTED: ', ITEMSLOADED_EVENT_NAME);
    unsetListener(ITEMSLOADED_EVENT_NAME, loadingCallback);
    
    //LAUNCH NEW GAME    
}

const setListener = (eventName, callback) => {
    console.log('WAITING FOR EVENT CALLED: ', eventName);
    window.addEventListener(eventName, callback);
}

const unsetListener = (eventName, callback) => {
    window.removeEventListener(eventName, callback);
}

setListener(ITEMSLOADED_EVENT_NAME, loadingCallback);

//WHEN THE GAME ENDS MAKE SURE TO REMOVE:
//window.removeEventListener('resize', loader.resizeGameWindow);


// import { mainMenu } from './MainMenu.js';
// import { game } from './Game.js';

console.log('INDEX COMPLETED IMPORTS');

// let jestTestingVariable = 999;
// const indexJestTestFunction = () => jestTestingVariable;
// export default indexJestTestFunction;

