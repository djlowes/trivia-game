//1. // Create a click event on a Start Button which calls a function used to play the game = game() AND DISPLAYS THE GAME
//2. // Create an object which has -
//      2.1 // Questions as object.keys, which have two values:
//      2.2 // Value (1) is the answer and value (2) is array which contain 3 false answers and one true answer
//3. // Create a function that -
//      3.1 // Loops through the Object Array to pull out each object.key index
//      3.2 // Then it appends/adds the question to the innerHTML of Div Object and the index value of string answers to another div element (maybe buttons)
//      3.3 // And sets a time limit to 30seconds for the user to choose a response, which is appended to div element as countdown clock
//      3.4 // If the user does not choose a response then -
//          3.41 // Call new function with Time limit of 5 seconds that append/add the Word 'Loser' to html div, play loser Audio and add++ to variable lossCount and add right answer to element ID
//      3.5 // Else if user chooses a response that != the answer value of the object key:
//          3.51 // Call new function with Time limit of 5 seconds that append/add the Word 'Loser' to html div, play loser Audio and add++ to variable lossCount
//      3.6 // Else if user chooses a response that == the answer of the vaue in the object key:
//          3.52 // Call new function with time limit of 5 seconds that appends/add the word 'Winner' to html div, play winner Audio and add++ to variable winCount
//4. // When the function has looped through all of the object.key questions, display final screen which appends the winCount and lossCount and adds a start button which
  // sets the win/loss count variables to zero and calls the game() function


var winCount = 0;
var loseCount = 0;
var triviaQuestions = [
	{
		Question: "What is 10/2?",
		Answers: {
			a: '3',
			b: '5',
			c: '115'
      d: '1113'
		},
		correctAnswer: 'b'
	},
	{
		Question: "What is 30/3?",
		Answers: {
			a: '3',
			b: '5',
			c: '10'
      d: '25'
		},
		CorrectAnswer: 'c'
	}
];


//$("#start").on("click", setTimeout(function() {
  //Object.getOwnPropertyNames(triviaQuestions).forEach(
//  function (val) {
//    console.log(triviaQuestions[val][0]);
//})

//}), 3000);












        // Clear the button alert's timeout.
  //clearTimeout(firstMessage);
