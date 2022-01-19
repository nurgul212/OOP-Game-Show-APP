/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// testing *****************************************************************************

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// Create a new instance of the `Game` class and add event listeners for the start button and onscreen keyboard buttons.
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);

// });
// *************************************************************************************************

// Declare a new variable called `game` that's not set to anything
let game;
const startGameButton = document.getElementById('btn__reset');
// When Start Game button is clicked, start the game.
startGameButton.addEventListener('click',(e) =>{
    game = new Game();
    game.startGame();

});


const qwerty = document.getElementById('qwerty');
// Add listener for mouse clicks on displayed game keyboard
qwerty.addEventListener('click', (e)=>{
 if(e.target.tagName === 'BUTTON'){
     game.handleInteraction(e.target);
 }

});

//add event listener for keydown event so that pressing a physical keyvoard button results in the handleInteraction()
// method being called for the associated onscreen keyboard button

const keyboard = qwerty.querySelectorAll('.key');
document.addEventListener('keydown', (e) => { 
    // console.log('ekey '+ e.key);
           for (let i = 0; i < keyboard.length; i ++){         
            if (e.key.toLowerCase() === keyboard[i].textContent && keyboard[i].disabled === false){
                // console.log(keyboard[i].textContent);
                game.handleInteraction(keyboard[i]);
        }
    }
});


