/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// testing



const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// Create a new instance of the `Game` class and add event listeners for the start button and onscreen keyboard buttons.

const game = new Game();

game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);

});