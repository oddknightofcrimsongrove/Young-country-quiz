//GIVEN I am taking a code quiz
//WHEN I click the start button
let Dev = document.getElementById("Start")
let button = document.createElement ('button')
let  text = document.createTextNode("Start")

//THEN a timer starts and I am presented with a question
let timeLeft = 60;

const timeInterval = setInterval(
    function () {
        count--;
        console.log(timeLeft);
        if (timeLeft == 0) {
            clearInterval(timeInterval);
            console.log("You Lose");
        }

    }, 1000);




//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

