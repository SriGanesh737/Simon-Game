
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var key = 0;
var level = 1;

var score = 0;
var highscore = 0;

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function ()
  {
    $("#" + currentColor).removeClass('pressed');
  }, 100);
}

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  var v = verify(userClickedPattern, gamePattern);
  if (v == -1)
  {
    console.log("fail");
    $("h1").text("FAILED");
    setTimeout(function () {
      $("h1").text("PRESS ANY KEY TO START");
      key = 0;
      score = 0;
      $("#score").text(score);
      gamePattern = [];
      userClickedPattern = [];
      level = 1;
    }, 1000)
  }
  else if(userClickedPattern.length==gamePattern.length) {
    level++;
    score++;
    $("#score").text(score);
    if (highscore < score) highscore = score;
    $("#highscore").text(highscore);
    $("h1").text("Level " + level);
    userClickedPattern = [];
    setTimeout(function ()
    {
      nextSequence();
    },1000)
  }
});

function verify(userClickedPattern, gamePattern)
{
  var v = 0;
  for (var i = 0; i < userClickedPattern.length; i++)
  {
    if (userClickedPattern[i] != gamePattern[i]) v = 1;
  }

  if (v == 1) return -1;
  else return 1;
 }

$(document).on('keypress', function () {
  if (key === 0) {
    nextSequence();
    $("h1").text("Level 1");
    key++;
  }
});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}
