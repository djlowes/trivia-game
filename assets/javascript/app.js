$(document).ready(function() {

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

var questionCount = 0
var countDown = 30;
var intervalId;
var winCount = 0;
var loseCount = 0;
var unanswerCount = 0;


$("#footer").on("click", function() {
		$("#footer").hide();
		$("#left").show();
		$("#right").show();
		showQuestions();
});


function showQuestions() {
		runClock();
		$("#timer").show();
		$("#result").hide();
		$("#question").html(triviaQuestions[questionCount].question);
		$("#q1").html(triviaQuestions[questionCount].answers.a);
		$("#q2").html(triviaQuestions[questionCount].answers.b);
		$("#q3").html(triviaQuestions[questionCount].answers.c);
		$("#q4").html(triviaQuestions[questionCount].answers.d);
}


$(".qs").on("click", function() {
userGuess = $(this).attr("value");
	if (userGuess === triviaQuestions[questionCount].correctAnswer) {
		winCount++;
		clearInterval(intervalId);
		setTimeout(correct, 4000);
	} else {
		loseCount++;
		clearInterval(intervalId);
		setTimeout(incorrect, 4000);
	}
});

function runClock(){
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
  countDown--;
  $("#timer").html(countDown);
    if (countDown === 0) {
		unanswerCount++
		$("#timer").hide()
			$("#timerwrap").html("You are out of time!!");
        	console.log("Out of time");
			stop();
      }
    }

function stop() {
	running = false;
	clearInterval(intervalId);
	showQuestions()
}


var correct = function() {
	//$(this).find('div').css("background-color", "yellow");
	$("#timer").hide()
	$("#result").show();
	$("#result").html("Well done, you guessed correct!");
	console.log("Correct Guess")
	questionCount++
	countDown = 30
	showQuestions();
}

var incorrect = function () {
	$("#timer").hide()
	$("#result").show();
	$("#result").html("You Guessed Wrong");
	console.log("Wrong Guess")
	questionCount++
	countDown = 30
	showQuestions();
}


});
