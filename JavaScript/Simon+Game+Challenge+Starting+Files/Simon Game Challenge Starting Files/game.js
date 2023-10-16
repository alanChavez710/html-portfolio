// Declare the buttonColours array
var buttonColours = ["red", "blue", "green", "yellow"];
// Array to hold the game pattern
var gamePattern = [];
//empt array for storing the user clicked pattern
var userClickedPattern = [];
var started = false; // Game started flag
var level = 0; // Game level

//keydown?
// Event listener for a keypress event to start the game
$(document).keypress(function() {
    if (!started) {
        // Update the level in the title when the game starts
        $("#level-title").text("Level " + level);
        // Call nextSequence to generate the first sequence of the game
        nextSequence();
        started = true; // Set started flag to true
    }
});

// Event listener for button clicks
$(".btn").click(function() {
var userChosenColour = $(this).attr("id");
// Add userChosenColour to userClickedPattern array
userClickedPattern.push(userChosenColour);    
//1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
playSound(userChosenColour);
animatePress(userChosenColour);

// Call checkAnswer and pass in the index of the last answer in the user's sequence
checkAnswer(userClickedPattern.length - 1);
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
         // Play wrong sound, add game-over class, update title, 
         // and remove game-over class after a delay if the user's sequence is incorrect
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // Set a timeout to execute a function after 200 milliseconds.
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        
        // reset the game
        startOver();
    }
}


// Define the nextSequence function
function nextSequence(){
    userClickedPattern = []; // Reset the userClickedPattern array
    
    level++; // Increase the level by 1
    $("#level-title").text("Level " + level); // Update h1 title
    // This generates a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    // use the randomNumber topick a random colour from the button Colours array
    var randomChosenColour = buttonColours[randomNumber];
    // add the new randomChosenColour to the end of the gamePattern array
    gamePattern.push(randomChosenColour);

    // Use jQuery to select the button with the same id as the randomChosenColour
  // Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   // Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
   playSound(randomChosenColour);
}


// Function to play a sound based on the name parameter
function playSound(name) {

  // Create a new audio object and play the corresponding sound
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Function to animate button press
function animatePress(currentColour){
    // Add pressed class to the button
    $("#" + currentColour).addClass("pressed");
    
    // Remove the pressed class after 100 milliseconds
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Function to reset the game
function startOver(){
    //3. Reset the level, gamePattern, and started variables.
    level = 0; // Reset the game level to 0.
    gamePattern = []; // Empty the gamePattern array.
    started = false; // Set started flag to false indicating the game has not started.
}