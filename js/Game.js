/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// declare Game class
class Game{
    //  the Game class cosntructor doesn't receive any parameters
    constructor(){
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    // Create phrases for use in game
    createPhrases() {
        const phraseArray = ['no pain no gain',
                            'practice makes pgorgress',
                            'It is great to be alive',
                            'good things take time',
                            'life is short'];

        return phraseArray;
    };

    // Start the game 
    startGame() {
        document.getElementById('overlay').style.display = 'none';
    }
     


}
