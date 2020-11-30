/* eslint-env node */
//------------------------------------------------------------------------------
//W RAZIE CZEGO WYWOŁANIE POZA TESTEM:  
// checkDOMelements()
//   .then(response => console.log(response)) 
//   .catch(console.log('błąd od razu, ale poczekajmy...'));
//------------------------------------------------------------------------------
//RAW SAMPLE
// const dom = new JSDOM(`<!DOCTYPE html><body>
//<p id="main" data-bonusImg>My First JSDOM!</p></body>`);
// console.log(dom.window.document.getElementById("main").textContent);  
//------------------------------------------------------------------------------

const { JSDOM } = require("jsdom");
// const colors = require('colors');
// import index from './src/index.js'; 
import  indexJestTestFunction  from './src/index.js'; 
import Game from './src/Game.js'; 

async function checkDOMelements() {
    //execute external scripts, included via <script src=""> --> resources: "usable"
    //enable executing scripts inside the page --> runScripts: "dangerously" option:
    let jsdomPromise = await JSDOM.fromFile("buildCopyForTest/index.html", {resources: "usable", runScripts: "dangerously" });
    return jsdomPromise;    
}

//------------------------------------------------------------------- 
//SAMPLE TESTS+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------------------------------------- 
const nameCheck = () => { 
    console.log('checking name...');    
}
describe('checking names', () => {
    beforeEach(() => nameCheck());    
    test('user is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });
    test('user is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

const gameChecking = () => {
    const game = new Game;
    return game.jestTestingValue;
}

const validatorFunctions = {
    add: (a, b) => a+b,
    indexCheck: indexJestTestFunction,
    DOMcheck: checkDOMelements,
    gameCheck: gameChecking
}

export default validatorFunctions;
