/* --------------------------- Coding Challenge 7 --------------------------- */
// Aurthor: Ngozi Young
// Date: 11/16/2019
// Description: Wrtie a program using Javascript that does the following:
// 1. Allows the coder to create questions using a function constructor. A question should contain:
//   * the question itself
//   * answer options - used an array for this
//   * the correct answers - used integers for this
// 2. Next, the coder creates a few questions using the function constructor from #1.
// 3. Store all components of a question inside an array
// 4. Select a random question and display that with its answer options in the console
// 5. Use 'prompt' method to ask user for the correct answer which should be entered as a number
// 6. The program will verify the user's selected answer and display the result to console
// 7. This program will be private to prevent interference with other programs that may use it
// /* Extra Credit Expert Level */
// 8. The program should prompt for the next random question after a question is answered so that the game never ends.
// The program will display the same questions more than once.
// 9. The user can quit the game by entering "exit" in the prompt field. The case sensitivity does not matter.
// 10. The program will using the power of "closures" to track and then display the score in the console. 1 point is given for each correct answers

/* The entire code is wrapped in Immediately Invoked Function Expressions (IIFE) to keep this entire code private
   This annonymous code is always immediately invoked by the (); at the end of this code. */
(function () {

  //Function constructor to define properties of a question
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  //Displays questions and answer choices in console
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for(var i=0; i<this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }
  //Checks to see if the answer is right or wrong
  Question.prototype.checkAnswer = function(userAnswer, callback) {
    var sc;
    if(userAnswer === this.correctAnswer) {
      console.log('Correct answer!');
      sc = callback(true);
      //Selects the next random question so that game never ends
      n = randomNum();
    } else {
      console.log('Wrong answer. Try again.');
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('---------------------------------------------');

  }

  // Selects question at random
  var n = randomNum();// question number selector
  //Created a few questions using the function constructor, Question()
  var nextQuestion, answers;
  nextQuestion = [];

  answers = ['Purple', 'Black', 'Blue', 'Green'];
  nextQuestion[0] = new Question('What is the color of the afternoon sky?', answers, 2);

  answers = ['Apple', 'Google', 'Samsung'];
  nextQuestion[1] = new Question('What is the brand name of an iPhone?', answers, 0);

  answers = [2, 30, 10, 16, 18];
  nextQuestion[2] = new Question('What is the legal age to drive a car?', answers, 3);

  answers = ['Whale', 'Dog', 'Snake', 'Mosquitoe', 'Goat'];
  nextQuestion[3] = new Question('Which of the following is man\'s best friend?', answers, 1);

  //Function to handle the scoring of the game
  function score() {
    var sc = 0;
    return function(isCorrect) {
      if(isCorrect) {
        sc++;
      }
      return sc;
    }
  }

  // Variable to initialize the score() function only once
  var keepScore = score();

  //Function to display prompt and the next random question
  function prompter() {
    nextQuestion[n].displayQuestion();
    var userAnswer = prompt('Please select the correct answer (just type the number). Or type "exit" to quit.', '');

    if(userAnswer == null) {
      userAnswer = ''; // toLowerCase() will throw an exception if user clicks on the cancel button
      console.log('Please enter "exit" to exit this game.')
    }

    if(userAnswer.toLowerCase() !== 'exit') {
      nextQuestion[n].checkAnswer(parseInt(userAnswer), keepScore);
      prompter();
    }
  }

  //Generates a random number
  function randomNum() {
    return Math.floor(Math.random() * 4);
  }

  //Let the game begin!
  prompter();
})();
