/* ------------------------------------------------------- Coding Challenge 7 */
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
// 10. The program will track and then display the score in the console. 1 point is given for each correct answers
// Could use the "power of closures" for this but did not make sense to me to do so.

/* The entire code is wrapped in Immediately Invoked Function Expressions (IIFE) to keep this entire code private
   This annonymous code is always immediately invoked by the (); at the end of this code. */
(function () {

  //Function constructor to define properties of a question
  var Question = function(question, correctAnswer, answerChoices) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answerChoices = answerChoices;
  };

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

  // Selects question at random
  questionNum = randomQuestionSelector();
  //Let the game begin!
  prompter();

  //Function to display prompt and display next random question
  function prompter() {
    console.log(nextQuestion[questionNum].question);
    for(var i=0; i<nextQuestion[questionNum].answerChoices.length; i++) {
      console.log(i + ': ' + nextQuestion[questionNum].answerChoices[i]);
    }
    var userAnswer = prompt('Please select the correct answer (just type the number). Or type "exit" to quit.', '');
    checkAnswer(userAnswer);
  }

  //Checks to see if the answer is right or wrong
  function checkAnswer(userAnswer) {
    if(userAnswer == nextQuestion[questionNum].correctAnswer) {
      score += 1
      console.log('Correct answer!');
      displayScore();
      //Selects the next random question so that game never ends
      questionNum = randomQuestionSelector();
      prompter();
    } else if(userAnswer === null) {
      console.log('Please type "exit" to cancel this game.');
      prompter();
    } else if(userAnswer.toLowerCase() === 'exit') {
      console.log('Game over!');
      displayScore();
    } else if (userAnswer != nextQuestion[questionNum].correctAnswer) {
      console.log('Wrong answer. Try again.');
      displayScore();
      prompter();
    }
  }

  function displayScore() {
    console.log('Your current score is: ' + score);
    console.log('---------------------------------------------');
  }

  //Generates a random number
  function randomQuestionSelector() {
    return Math.floor(Math.random() * 4);
  }
})();
