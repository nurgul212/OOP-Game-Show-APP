/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// declare Game class
class Game{
    //  the Game class cosntructor doesn't receive any parameters
    constructor() {
        //Used to check the number of missed guesses
        this.missed = 0;   
        this.phrases = this.createPhrases();
        // This is the Phrase object that's currently in play, Initial value is `null`
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
  
    
    // Start the game --It hides the start screen overlay. 
    // and calls the `getRandomPhrase()` method to select a Phrase object from the Game object's array of phrases.
    // and adds the phrase to the gamrboard by calling the `addPhraseToDisplay()` method
    // The selected phrase should be stored in the Game's `activePhrase` property.
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

   

    handleInteraction(button) {
        // console.log(button);
        // Disabled the selected button from onscreen keyboard button
        button.disabled = true;
        let guessedLetter = this.activePhrase.checkLetter(button.textContent);
        // if the phrase includes the guessed letter , add the `chosen` class, 
        // and call the `showMatchedLetter()` method on the phrase
        // then call `checkForWin()` method, if the player has won the game, call `gameOver()` method
        if(guessedLetter){
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()){
                this.gameOver();
            }
            // else add the 'wrong' class
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
            
    }
   
   
   
    // Checks to see if the player has revealed all of the letters in the active phrase
    // return {boolean} True if game has been won, false if game wasn't won

    checkForWin(){
        const letterClass = document.getElementsByClassName('letter');
        const showClass = document.getElementsByClassName('show');
        if(letterClass.length === showClass.length){
            return true;
        }else{
            return false;
        }

    }

    // Removes a life from the scoreboard by replacing the `liveHeart.png` with `lostHeart.png`, and increments the `missed` property.
    // If the player have fice missed guesses, then end the game by calling the `gameOver()` method
    removeLife(){
        const liveHearts = document.querySelectorAll('.tries img');
        liveHearts[this.missed].src = 'images/lostHeart.png';
        this.missed ++;
        if(this.missed > 4){
            this.gameOver();
        }
    }


    // Displayes the original start screen overlay, and depending on the outcome of the game, updates the overlay `h1` element
    // with a friendly win or loss message
    gameOver() {

  }



}


