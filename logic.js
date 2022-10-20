
let buttonColors = [ "red", "blue", "green", "yellow"];
let randomChosenColor;
let gamePattern = [];
let userclickedpattern = [];
let level = 0;
let key = 0;

function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}

$(".btn").click(
    function () {
        let userChosenColor = $(this).attr('id');
        console.log(userChosenColor);
        userclickedpattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);

        //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
        checkAnswer(userclickedpattern.length - 1);
    }
);

function animatePress(currentColor)
{

    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#"+currentColor).removeClass('pressed');
    }, 100);
}

$(document).on('keypress', function () {
    if (key === 0) {
        nextSequence();
      $("h1").text("Level 0");
        key++;
    }
});

function checkAnswer(currentLevel)
{
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userclickedpattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userclickedpattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");

    }

}
alert();
function nextSequence()
{

    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userclickedpattern = [];

    level += 1;
    $("h1").text("Level " + level);

    let randomNumber = Math.floor( Math.random() * 3);
    console.log(randomNumber);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    for (var i = 0; i < gamePattern.length;i++)
        {
        $("#" + gamePattern[i]).fadeIn(100).fadeOut(100).fadeIn(100);
        }
   // $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   // playSound(randomChosenColor);

}





