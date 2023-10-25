// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
let play_Btn = document.getElementById("play-button");
console.log(play_Btn)

play_Btn.addEventListener("click", redirect)

function redirect(){
    location.href = "./game.html"
}