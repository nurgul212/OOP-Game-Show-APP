/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// declare Game class
class Game{
    //  the Game class cosntructor doesn't receive any parameters
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    // I chose option #1:Inside the Game class, create a method that creates and 
    // returns an array of 5 new Phrases objects, and then set the `phrases` property to call that method.
    createPhrases(){
        const phraseArray = [
            new Phrase('No pain no gain'),
            new Phrase('Practice makes pgorgress'),
            new Phrase('It is great to be alive'),
            new Phrase('Good things take time'),
            new Phrase('Life is short')
        ];
        // console.log(this.phrases.length);
        return phraseArray;
    }
  
    
    // Start the game 
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
     
    // get a random phrase from phraseArray, and return {object} phrase object chosen to be used 
    getRandomPhrase(){
        const randomPhraseIndex = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomPhraseIndex];
    }


}
