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
$("#playagain").hide();


$("#start").on("click", function() {
		$("#start").hide();
		$("#playagain").show();
		$("#left").show();
		$("#right").show();
		showQuestions();
});


function showQuestions() {
		runClock();
		$("#question").html(triviaQuestions[questionCount].question);
		$("#q1").html(triviaQuestions[questionCount].answers.a);
		$("#q2").html(triviaQuestions[questionCount].answers.b);
		$("#q3").html(triviaQuestions[questionCount].answers.c);
		$("#q4").html(triviaQuestions[questionCount].answers.d);
			if (questionCount ===9) {
				over();
			}
}

$(".qs").on("click", function() {
userGuess = $(this).attr("value");
	if (userGuess === triviaQuestions[questionCount].correctAnswer) {
		console.log("Correct Guess")
		winCount++;
		questionCount++
		$("#timer").hide()
		$("#result").show()
		$("#result").html("You got it right! Well done!");
		clearInterval(intervalId);
		setTimeout(reset, 4000);
	} else {
		console.log("Incorrect Guess")
		loseCount++;
		questionCount++
		$("#timer").hide()
		$("#result").show()
		$("#result").html("You didn't get it this time. Try again");
		clearInterval(intervalId);
		setTimeout(reset, 4000);
	}
});

function runClock(){
	$("#timer").show();
	$("#result").hide()
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
  countDown--;
  $("#timer").html(countDown);
    if (countDown === 0) {
			unanswerCount++
			questionCount++
			$("#timer").hide()
			$("#result").show()
			$("#result").html("You are out of time!!");
      console.log("Out of time");
			clearInterval(intervalId);
			setTimeout(reset, 4000);
   }
}

var reset = function() {
	countDown = 30
	showQuestions();
}

function over() {
	$("#left").hide();
	$("#right").hide();
}

$("#playagain").on("click", function() {
	var questionCount = 0
	var countDown = 30;
	var intervalId;
	var winCount = 0;
	var loseCount = 0;
	var unanswerCount = 0;

});



});
