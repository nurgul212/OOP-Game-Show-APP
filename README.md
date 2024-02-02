### FSJS Project 4 - OOP Game Show App
In this project, I have created a browser-based, word guessing game: "Phrase Hunter". 

## Project Sample Snapshot
![Screenshot 2024-02-02 115456](https://github.com/nurgul212/OOP-Game-Show-APP/assets/90399606/26b76d03-c384-4d47-855a-c4978f8fa354)
### Click the following link to view the app:
https://nurgul212.github.io/OOP-Game-Show-APP/

### Languages & Techniques Used: 
- HTML (provide)
- CSS (Provided)
- JavaScript
- Object-Oriented Programming (OOP)

### Rules of the game
- The player's goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the scree.

- The player clicks an onscreen keyboard to guess letters in the phrase.

- The letter is disabled on the onscreen keyboard and a player can't select that letter again.

- If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).

- If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.

- The player keeps choosing letters until they reveal all the letters in the phrase (and win), or they make five incorrect guesses (and lose).

### Exceeds Expectations Requirements
- I added event listener for keydown event so that pressing a physical keyvoard button results in the handleInteraction() method being called for the associated onscreen keyboard button.
- App styles have been personalized by changing the background color, adding extra texts, etc.

