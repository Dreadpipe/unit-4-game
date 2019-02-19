// This is a grandparent function that holds my jQuery/javascript
// I need this so the document(html) properly loads before executing my programs
$(document).ready(function() {


// I need to create a function that initializes the game
// Prefereably stored in a button the user can click
// "Click Master Splinter to Begin!"
//$("#splint").click(intialize)

// I need a variable that stores a random number between 19 and 120
const randomNum =  Math.floor(Math.random() * 100) + 19

// I need to assign that number to Master Splinter
$("#random").html(randomNum)

// I need to create a variable that stores a random number between 1 and 12
const ninjaNum =  Math.floor(Math.random() * 12) + 1

// I need to assign that number to each Ninja Turtle
// But, it must be a different number for each turtle
// Then, I need to create a click a function
// that stores that value as the user clicks that turtle


// I need to display the user's clicked score vs the random score

// I need to create a win condition, in which the user matches the score
// and I need to create a lose condition, in which the user exceeds the score

// I need to display the user's total wins and losses




// This is closing parenthetical for my document.ready function
});