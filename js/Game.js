/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// declare Game class
class Game{
    //  the Game class cosntructor doesn't receive any parameters
    constructor() {
        this.missed = 0;
        // I chose option #2: Simply add 5 new Phrase objects directly in the empty array that was originally
        // set as the value of the `phrases` property
        this.phrases = [
                        new Phrase('No pain no gain'),
                        new Phrase('Practice makes pgorgress'),
                        new Phrase('It is great to be alive'),
                        new Phrase('Good things take time'),
                        new Phrase('Life is short')
                    ];
                    // console.log(this.phrases.length);
        this.activePhrase = null;
    }
  
    
    // Start the game 
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
     
    // get a random phrase from phraseArray, and return {object} phrase object chosen to be used 
    getRandomPhrase() {
        const randomPhraseIndex = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomPhraseIndex];
    }


}
