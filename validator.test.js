/* eslint-disable no-undef */
/* eslint-env node */
import validatorFunctions from './validator.js';
import '@testing-library/jest-dom';
//------------------------------------------------------------------- 
//SAMPLE TESTS+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------------------------------------- 
test('adds 2+2 to equal 4', () => {
    expect(validatorFunctions.add(2, 2)).toBe(4);
});
//------------------------------------------------------------------- 
//APP TESTS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------------------------------------- 
    // test('INDEX PRESENT', () => {
    // Note that, since you are still testing promises, the test is still asynchronous. 
    // Hence, you will need to tell Jest to wait by returning the unwrapped assertion.
        
    //option1
    // return expect(validatorFunctions.DOMcheck()).resolves.not.toBeNull();

    //option2
    // expect.assertions(1);
    // return validatorFunctions.DOMcheck()
    // .then(data => {
    //     expect(data).not.toBeNull();
    // }) 
// });

    //option3
test('INDEX PRESENT', async () => {
expect.assertions(1);
const data = await validatorFunctions.indexCheck();
// expect(data).not.toBeNull();
// expect(data).toBeDefined();
return expect(Promise.resolve(data)).resolves.toBe(999); 
});
//-------------------------------------------------------------------
test('CHECKING GAME CLASS', () => {
    expect.assertions(1);
    expect(validatorFunctions.gameCheck()).toBe(999);
});

test('DOM ELEMENTS PRESENT', async () => {
    // expect.assertions(1);
    const JSDOM = await validatorFunctions.DOMcheck();
    return expect(Promise.resolve(JSDOM)).resolves.not.toBeNull()
    // .then(console.log("JSDOM: ", JSDOM));
    .then(console.log("JSDOM RECEIVED"))
    .then(() => {
        console.log(getByTestId(document.documentElement, "playBtn"));    
    }
        
    );
    });

    