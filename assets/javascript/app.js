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

var triviaQuestions = [
	{
		question: "What is the capital of Australia?",
		answers: {
			a: 'Melbourne',
			b: 'Sydney',
			c: 'Canberra',
      d: 'Darwin'
		},
		correctAnswer: 'c'
	},
	{
		question: "What is the capital city of Spain?",
		answers: {
			a: 'Madrid',
			b: 'Barcelona',
			c: 'Valencia',
      d: 'San Sebastion'
		},
		correctAnswer: 'a'
	},
  {
		question: "What is the capital city of Nigeria?",
		answers: {
			a: 'Abuja',
			b: 'Accra',
			c: 'Adamstown',
      d: 'Amman'
		},
		correctAnswer: 'a'
	},
  {
		question: "What is the capital city of Ghana?",
		answers: {
      a: 'Abuja',
			b: 'Accra',
			c: 'Adamstown',
      d: 'Amman'
		},
		correctAnswer: 'b'
	},
  {
		question: "What is the capital city of Turkey?",
		answers: {
      a: 'Ankara',
			b: 'Bursa',
			c: 'Konya',
      d: 'Istanbul'
		},
		correctAnswer: 'a'
	},
  {
		question: "What is the capital city of Brazil?",
		answers: {
      a: 'Brasilia',
			b: 'Rio de Janeiro',
			c: 'San Paulo',
      d: 'Salvador'
		},
		correctAnswer: 'a'
	},
  {
		question: "What is the capital city of Canada?",
		answers: {
      a: 'Vancouver',
			b: 'Toronto',
			c: 'Montreal',
      d: 'Ottawa'
		},
		correctAnswer: 'd'
	},
  {
		question: "What is the capital city of New Zealand?",
		answers: {
      a: 'Auckland',
			b: 'Wellington',
			c: 'Christchurch',
      d: 'Dunedin'
		},
		correctAnswer: 'b'
	},
  {
		question: "What is the capital city of Croatia?",
		answers: {
      a: 'Split',
			b: 'Dubrovnik',
			c: 'Zagreb',
      d: 'Zader'
		},
		correctAnswer: 'c'
	},
  {
		question: "What is the capital city of Singapore?",
		answers: {
      a: 'Singapore',
			b: 'Georgetown',
			c: 'Kuala Lumpur',
      d: 'Batam'
		},
		correctAnswer: 'a'
	}
];

var countDown = 30
var intervalId;
var winCount = 0;
var loseCount = 0;

$("#start").click(startGame);

function startGame() {
  intervalId = setInterval(decrement, 1000);
  for
}


function decrement() {
  countDown--;
  $("#timer").html(countDown);
    if (countDown === 0) {
      next();
        alert("Time Up!");
      }
    }

function next() {
  clearInterval(intervalId);
}
