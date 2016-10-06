
var options = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesleft = 9;

function random_character() {
    var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    return chars.substr( Math.floor(Math.random() * 62), 1);
}
function calculateResult(userGuess, computerGuess){
	if(options.indexOf(userGuess) >= 0){
		if(userGuess === computerGuess ){
			wins++;
		}

		if(userGuess != computerGuess){
			losses++;	
		}
	}
}

function printHtmlReport(){
	html += "<p>Wins: " + wins + "</p>"; 
	html += "<p>Losses: " + losses + "</p>";
	html += "<p>Guesses Left: " + guessesLeft + "</p>";
};
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerRandomLetter = Math.floor(Math.random() * options.length);
	var computerGuess = options[computerRandomLetter];

	calculateResult(userguess, computerGuess;	
	
	printHtmlReport();	
}