/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// declare Phrase class
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        
    }

    // This method adds letter placeholders to the display when the game starts.
    addPhraseToDisplay(){
        const selectedPhrase = this.phrase.split('');
        // console.log(selectedPhrase);
        const ul = document.querySelector('#phrase ul');
        for(let i = 0; i < selectedPhrase.length; i++){
          const list = document.createElement('li');
          list.textContent = selectedPhrase[i];
          ul.appendChild(list);

          if(selectedPhrase[i] === ' ' ){
              list.className = 'space';
          } else {
              list.className = 'letter';
          }
        }

    }

    // When the player correctly guesses a letter, the empty box is replaced with matched letter
    showMatchedLetter(){

    }
}