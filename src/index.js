// import './sass/index.scss';
import Game from './Game.js';
let jestTestingVariable = 999;

window.onload = function() {    
    if (document.querySelector(".playBtn")) {
        const playBtn = document.querySelector(".playBtn");
        const game = new Game(playBtn);
        game.initialize();
    } else throw new Error('unable to find required DOM elements');
}

const indexJestTestFunction = () => jestTestingVariable;
export default indexJestTestFunction;

