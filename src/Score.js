import UI from './UI.js';

export default class Score extends UI {    
    constructor(value = 0) {
        super();
        this.value = value;
        this.element = null;
        this.init();
    }
    
    init() {
        this.element = this.getElement(this.UiSelectors.score);
    }

    setValue(value) {
        this.value = value;
        this.updateValue();
    }

    updateValue() {
        this.element.textContent = `SCORE: ${this.value}`;
    }
}