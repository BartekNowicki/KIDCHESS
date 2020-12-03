import './sass/index.scss';
//IMPORTING EXPORTED INSTANCES, CONSTRUCTOR CALLED UPON EXPORT:
import { loader } from './Loader.js';
import { ITEMSLOADED_EVENT_NAME } from './Loader.js';
import { menu } from './Menu.js';
// import { game } from './Game.js';

const loadingCallback = () => {
    // console.log('EVENT NOTED: ', ITEMSLOADED_EVENT_NAME);
    unsetListener(ITEMSLOADED_EVENT_NAME, loadingCallback);
    //CANNOT INITIALIZE BEFORE LOADER COMPLETE:
    menu.initializeMenu();    
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

console.log('INDEX COMPLETED IMPORTS');

// let jestTestingVariable = 999;
// const indexJestTestFunction = () => jestTestingVariable;
// export default indexJestTestFunction;
export const loaderLoadedReferences = loader.importedReferences;
