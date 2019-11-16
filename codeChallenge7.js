/* ------------------------------------------------------- Coding Challenge 7 */

//TODO: need to add game instructions as comments

//Function constructor to define properties of a question
var Question = function(question, correctAnswer, answerChoices) {
  this.question = question;
  this.correctAnswer = correctAnswer;
  this.answerChoices = answerChoices;
}

//Created a few questions using the function constructor, Question()
var nextQuestion, answerChoices;
nextQuestion = [];

answerChoices = ['Purple', 'Black', 'Blue', 'Green'];
nextQuestion[0] = new Question('What is the color of the afternoon sky?', 2, answerChoices);

answerChoices = ['Apple', 'Google', 'Samsung'];
nextQuestion[1] = new Question('What is the brand name of an iPhone?', 0, answerChoices);

answerChoices = [2, 30, 10, 16, 18];
nextQuestion[2] = new Question('What is the legal age to drive a car?', 3, answerChoices);

answerChoices = ['Whale', 'Dog', 'Snake', 'Mosquitoe', 'Goat'];
nextQuestion[3] = new Question('Which of the following is man\'s best friend?', 1, answerChoices);

var questionNum // question number selector
var score = 0;

//Generates a random number
function randomQuestionSelector() {
  return Math.floor(Math.random() * 4);
}

// Selects question at random
questionNum = randomQuestionSelector();
//Let the game begin!
prompter();

//Function to display prompt and display next question
function prompter() {
  console.log(nextQuestion[questionNum].question);
  for(var i=0; i<nextQuestion[questionNum].answerChoices.length; i++) {
    console.log(i + ': ' + nextQuestion[questionNum].answerChoices[i]);
  }
  var userAnswer = prompt('Please select the correct answer (just type the number). Or type "exit" to quit.', '');
  //Checks the answer
  checkAnswer(userAnswer);
}

//Checks to see if the answer is right or wrong
function checkAnswer(userAnswer) {
  if(userAnswer == nextQuestion[questionNum].correctAnswer){
    score += 1
    console.log('Correct answer!');
    console.log('Your current score is: ' + score);
    console.log('---------------------------------------------');
    //Displays the next random question so that game never ends
    questionNum = randomQuestionSelector();
    prompter();
  } else if(userAnswer == null){
    prompter();
  } else if(userAnswer == 'exit') {
    //TODO
  }
  else {
    console.log('Wrong answer. Try again.');
    console.log('Your current score is: ' + score);
    console.log('---------------------------------------------');
    //Displays the same question again
    prompter();
  }
}
